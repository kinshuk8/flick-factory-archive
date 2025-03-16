
import { useState, useEffect } from 'react';
import { Star, Play } from 'lucide-react';
import { Movie } from '@/utils/movieData';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MovieDetailProps {
  movie: Movie;
}

export const MovieDetail = ({ movie }: MovieDetailProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen">
      {/* Hero Background */}
      <div className="relative h-[70vh] flex items-end">
        {/* Background Image with lazy loading effect */}
        <div 
          className={cn(
            "absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-out",
            isLoaded ? "blur-0 scale-100" : "blur-md scale-105"
          )}
          style={{ backgroundImage: `url(${movie.backdropUrl})` }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-hero-gradient z-10" />
        
        {/* Content */}
        <div className="container relative z-20 pb-16 md:pb-24 pt-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            {/* Movie Poster */}
            <div 
              className={cn(
                "hidden md:block rounded-lg overflow-hidden shadow-lg transition-all duration-500",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ maxWidth: "300px" }}
            >
              <img 
                src={movie.posterUrl} 
                alt={movie.title} 
                className="w-full h-auto"
                loading="eager"
              />
            </div>
            
            {/* Movie Info */}
            <div className="md:col-span-2 space-y-6">
              <div 
                className={cn(
                  "space-y-2 transition-all duration-500",
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: "0.2s" }}
              >
                <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
                  {movie.title}
                  <span className="ml-3 text-white/70 font-normal">({movie.year})</span>
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-white/90">
                  <div>{movie.runtime}</div>
                  <div>{movie.genres.join(', ')}</div>
                </div>
              </div>
              
              {/* Rating */}
              <div 
                className={cn(
                  "flex items-center transition-all duration-500",
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: "0.3s" }}
              >
                <div className="flex items-center bg-black/30 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <Star className="w-5 h-5 text-imdb-yellow mr-2 fill-imdb-yellow" />
                  <span className="font-medium text-white">{movie.rating}/10</span>
                </div>
              </div>
              
              {/* Plot */}
              <p 
                className={cn(
                  "text-lg text-white/80 max-w-2xl transition-all duration-500",
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: "0.4s" }}
              >
                {movie.plot}
              </p>
              
              {/* Director & Cast */}
              <div 
                className={cn(
                  "space-y-3 transition-all duration-500",
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: "0.5s" }}
              >
                <p className="text-white/90">
                  <span className="text-white/70">Director: </span>
                  {movie.director}
                </p>
                <p className="text-white/90">
                  <span className="text-white/70">Stars: </span>
                  {movie.actors.join(', ')}
                </p>
              </div>
              
              {/* Actions */}
              <div 
                className={cn(
                  "flex flex-wrap gap-4 pt-4 transition-all duration-500",
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: "0.6s" }}
              >
                {movie.trailerUrl && (
                  <Button 
                    onClick={() => setIsTrailerOpen(true)}
                    className="bg-imdb-yellow hover:bg-imdb-yellow/90 text-imdb-dark rounded-full px-6 py-6 flex items-center gap-2 transition-transform hover:scale-105 duration-300"
                  >
                    <Play className="w-5 h-5 fill-current" />
                    <span className="font-medium">Watch Trailer</span>
                  </Button>
                )}
                
                <Button 
                  variant="outline" 
                  className="rounded-full px-6 py-6 border-white/30 text-white hover:bg-white/10 transition-transform hover:scale-105 duration-300"
                >
                  <span className="font-medium">Add to Watchlist</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Movie Details */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left column - more info */}
          <div className="md:col-span-2 space-y-8 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <div>
              <h2 className="text-2xl font-display font-bold mb-4">Storyline</h2>
              <p className="text-muted-foreground">{movie.plot}</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-display font-bold mb-4">Cast & Crew</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Director</h3>
                  <p className="text-muted-foreground">{movie.director}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Stars</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    {movie.actors.map(actor => (
                      <li key={actor}>{actor}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - details */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="p-6 bg-muted rounded-lg">
              <h3 className="text-lg font-medium mb-4">Details</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Release Date</dt>
                  <dd>{movie.year}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Runtime</dt>
                  <dd>{movie.runtime}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Genres</dt>
                  <dd>{movie.genres.join(', ')}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Rating</dt>
                  <dd className="flex items-center">
                    <Star className="w-4 h-4 text-imdb-yellow fill-imdb-yellow mr-1" />
                    {movie.rating}/10
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trailer Modal */}
      {isTrailerOpen && movie.trailerUrl && (
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
              src={movie.trailerUrl.replace('watch?v=', 'embed/')}
              title={`${movie.title} Trailer`}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};
