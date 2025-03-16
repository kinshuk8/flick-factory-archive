
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Star } from 'lucide-react';
import { featuredMovie } from '@/utils/movieData';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleMovieClick = () => {
    navigate(`/movie/${featuredMovie.id}`);
  };
  
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-end overflow-hidden">
      {/* Background Image with lazy loading effect */}
      <div 
        className={cn(
          "absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-out",
          isLoaded ? "blur-0 scale-100" : "blur-md scale-105"
        )}
        style={{ backgroundImage: `url(${featuredMovie.backdropUrl})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-hero-gradient z-10" />
      
      {/* Content */}
      <div className="container relative z-20 pb-16 md:pb-24">
        <div className="max-w-3xl space-y-6">
          {/* Movie Tag - subtle animation to draw attention */}
          <div 
            className={cn(
              "inline-block px-3 py-1 rounded-full bg-imdb-yellow/90 text-imdb-dark text-xs font-medium tracking-wide",
              isLoaded ? "animate-fade-in" : "opacity-0"
            )}
            style={{ animationDelay: '0.2s' }}
          >
            Featured
          </div>
          
          {/* Title and Year */}
          <h1 
            className={cn(
              "text-4xl md:text-6xl font-display font-bold tracking-tight text-white text-balance",
              isLoaded ? "animate-fade-in" : "opacity-0"
            )}
            style={{ animationDelay: '0.4s' }}
          >
            {featuredMovie.title}
            <span className="ml-3 text-white/70 font-normal">({featuredMovie.year})</span>
          </h1>
          
          {/* Rating and Genres */}
          <div 
            className={cn(
              "flex flex-wrap items-center gap-4",
              isLoaded ? "animate-fade-in" : "opacity-0"
            )}
            style={{ animationDelay: '0.6s' }}
          >
            <div className="flex items-center">
              <Star className="w-5 h-5 text-imdb-yellow mr-1 fill-imdb-yellow" />
              <span className="font-medium">{featuredMovie.rating}/10</span>
            </div>
            <div className="text-white/70">{featuredMovie.runtime}</div>
            <div className="flex flex-wrap gap-2">
              {featuredMovie.genres.map((genre) => (
                <span 
                  key={genre} 
                  className="px-2 py-1 rounded-md bg-white/10 text-white/90 text-xs font-medium"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
          
          {/* Plot */}
          <p 
            className={cn(
              "text-lg text-white/80 max-w-2xl text-balance",
              isLoaded ? "animate-fade-in" : "opacity-0"
            )}
            style={{ animationDelay: '0.8s' }}
          >
            {featuredMovie.plot}
          </p>
          
          {/* Actions */}
          <div 
            className={cn(
              "flex flex-wrap gap-4 mt-8",
              isLoaded ? "animate-fade-in" : "opacity-0"
            )}
            style={{ animationDelay: '1s' }}
          >
            <Button 
              onClick={() => setIsTrailerOpen(true)}
              className="bg-imdb-yellow hover:bg-imdb-yellow/90 text-imdb-dark rounded-full px-6 py-6 flex items-center gap-2 transition-transform hover:scale-105 duration-300"
            >
              <Play className="w-5 h-5 fill-current" />
              <span className="font-medium">Watch Trailer</span>
            </Button>
            
            <Button 
              onClick={handleMovieClick}
              variant="outline" 
              className="rounded-full px-6 py-6 border-white/30 text-white hover:bg-white/10 transition-transform hover:scale-105 duration-300"
            >
              <span className="font-medium">More Info</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Trailer Modal */}
      {isTrailerOpen && featuredMovie.trailerUrl && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="absolute top-4 right-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsTrailerOpen(false)}
              className="text-white hover:bg-white/10 rounded-full"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
          <div className="w-full max-w-5xl aspect-video rounded-lg overflow-hidden shadow-2xl animate-scale-in">
            <iframe
              src={featuredMovie.trailerUrl.replace('watch?v=', 'embed/')}
              title={`${featuredMovie.title} Trailer`}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};
