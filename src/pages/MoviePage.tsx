
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getMovieById } from '@/utils/movieData';
import { MovieDetail } from '@/components/MovieDetail';
import { Navbar } from '@/components/Navbar';

const MoviePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const movie = id ? getMovieById(id) : undefined;
  
  useEffect(() => {
    if (!movie) {
      navigate('/not-found');
    }
  }, [movie, navigate]);
  
  if (!movie) {
    return null;
  }
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <MovieDetail movie={movie} />
      </main>
    </div>
  );
};

export default MoviePage;
