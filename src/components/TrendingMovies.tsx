
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getTrendingMovies } from '@/utils/movieData';
import { MovieCard } from './MovieCard';
import { cn } from '@/lib/utils';

export const TrendingMovies = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const movies = getTrendingMovies();
  
  const handleScroll = () => {
    if (containerRef.current) {
      setScrollPosition(containerRef.current.scrollLeft);
    }
  };
  
  const scrollLeft = () => {
    if (containerRef.current) {
      const newPosition = Math.max(containerRef.current.scrollLeft - 600, 0);
      containerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };
  
  const scrollRight = () => {
    if (containerRef.current) {
      const newPosition = containerRef.current.scrollLeft + 600;
      containerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };
  
  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = containerRef.current 
    ? scrollPosition < containerRef.current.scrollWidth - containerRef.current.clientWidth
    : true;
  
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-display font-bold">Trending Now</h2>
          
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={cn(
                "p-2 rounded-full transition-all duration-300",
                canScrollLeft 
                  ? "hover:bg-muted text-foreground" 
                  : "text-muted-foreground/40 cursor-not-allowed"
              )}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={cn(
                "p-2 rounded-full transition-all duration-300",
                canScrollRight 
                  ? "hover:bg-muted text-foreground" 
                  : "text-muted-foreground/40 cursor-not-allowed"
              )}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div 
          ref={containerRef}
          className="flex space-x-5 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-thin"
          onScroll={handleScroll}
        >
          {movies.map((movie, index) => (
            <div 
              key={movie.id} 
              className="w-[180px] flex-shrink-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <MovieCard 
                movie={movie} 
                priority={index < 3}
              />
            </div>
          ))}
        </div>
        
        {/* Mobile scroll buttons */}
        <div className="flex justify-center space-x-2 mt-6 md:hidden">
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-200",
              canScrollLeft ? "bg-foreground" : "bg-muted"
            )}
            aria-label="Scroll left"
          />
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-200",
              canScrollRight ? "bg-foreground" : "bg-muted" 
            )}
            aria-label="Scroll right"
          />
        </div>
      </div>
    </section>
  );
};
