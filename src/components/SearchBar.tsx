
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { searchMovies, Movie } from '@/utils/movieData';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  onClose?: () => void;
  className?: string;
}

export const SearchBar = ({ onClose, className }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Movie[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    // Focus input when component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  
  useEffect(() => {
    if (query.trim().length > 1) {
      const searchResults = searchMovies(query);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      if (onClose) onClose();
    }
  };
  
  const handleResultClick = (movieId: string) => {
    navigate(`/movie/${movieId}`);
    if (onClose) onClose();
  };
  
  return (
    <div className={cn("w-full", className)}>
      <form 
        onSubmit={handleSearch}
        className={cn(
          "relative w-full transition-all duration-300",
          isFocused ? "scale-105" : "scale-100"
        )}
      >
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search for movies, TV shows, celebrities..."
            className="w-full px-12 py-4 bg-secondary rounded-full text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-imdb-yellow/50 transition-all duration-300"
          />
          <Search 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground/70" 
            size={18} 
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground/70 hover:text-foreground transition-colors duration-200"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </form>
      
      {/* Search Results */}
      {results.length > 0 && (
        <div className="mt-4 bg-card rounded-xl border border-border overflow-hidden shadow-lg animate-fade-in">
          <ul className="divide-y divide-border">
            {results.map((movie) => (
              <li key={movie.id} className="transition-colors hover:bg-muted/50">
                <button
                  onClick={() => handleResultClick(movie.id)}
                  className="w-full px-4 py-3 flex items-center text-left"
                >
                  <div 
                    className="w-10 h-14 bg-cover bg-center rounded mr-3 flex-shrink-0"
                    style={{ backgroundImage: `url(${movie.posterUrl})` }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{movie.title}</p>
                    <p className="text-sm text-muted-foreground truncate">
                      {movie.year} • {movie.genres.join(', ')}
                    </p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
