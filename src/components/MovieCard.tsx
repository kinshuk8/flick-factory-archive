
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Movie } from '@/utils/movieData';
import { cn } from '@/lib/utils';

interface MovieCardProps {
  movie: Movie;
  priority?: boolean;
  className?: string;
}

export const MovieCard = ({ movie, priority = false, className }: MovieCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };
  
  return (
    <div 
      className={cn(
        "group relative flex flex-col rounded-lg overflow-hidden movie-card-hover cursor-pointer",
        className
      )}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Poster Image */}
      <div className="aspect-[2/3] w-full relative overflow-hidden rounded-lg">
        {/* Loading placeholder */}
        <div 
          className={cn(
            "absolute inset-0 bg-muted/30 animate-pulse-subtle",
            imageLoaded ? "opacity-0" : "opacity-100"
          )}
        />
        
        <img 
          src={movie.posterUrl}
          alt={movie.title}
          loading={priority ? "eager" : "lazy"}
          className={cn(
            "w-full h-full object-cover transition-all duration-700",
            imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105",
            isHovered ? "transform scale-110" : "scale-100"
          )}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Gradient overlay */}
        <div 
          className={cn(
            "absolute inset-0 bg-card-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          )}
        />
        
        {/* Rating badge */}
        <div 
          className={cn(
            "absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-full bg-black/70 backdrop-blur-sm text-white text-xs font-medium",
            "transition-all duration-300",
            isHovered ? "opacity-0 translate-y-1" : "opacity-100"
          )}
        >
          <Star className="w-3 h-3 fill-imdb-yellow text-imdb-yellow" />
          <span>{movie.rating}</span>
        </div>
        
        {/* Hidden genres that appear on hover */}
        <div className={cn(
          "absolute bottom-0 left-0 right-0 p-3 flex flex-wrap gap-1",
          "transition-all duration-300",
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          {movie.genres.map(genre => (
            <span 
              key={genre} 
              className="text-xs px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm text-white/90"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
      
      {/* Movie Info */}
      <div className="flex flex-col mt-3 gap-1">
        <h3 className="font-medium truncate group-hover:text-imdb-yellow transition-colors duration-300">
          {movie.title}
        </h3>
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{movie.year}</span>
          <span>{movie.runtime}</span>
        </div>
      </div>
    </div>
  );
};
