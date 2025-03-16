
export interface Movie {
  id: string;
  title: string;
  year: number;
  rating: number;
  runtime: string;
  genres: string[];
  director: string;
  actors: string[];
  plot: string;
  posterUrl: string;
  backdropUrl: string;
  trailerUrl?: string;
}

// Sample movie data
export const movies: Movie[] = [
  {
    id: "tt0111161",
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    runtime: "2h 22m",
    genres: ["Drama"],
    director: "Frank Darabont",
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    plot: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
    posterUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1450&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1450&auto=format&fit=crop",
    trailerUrl: "https://www.youtube.com/watch?v=NmzuHjWmXOc"
  },
  {
    id: "tt0068646",
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    runtime: "2h 55m",
    genres: ["Crime", "Drama"],
    director: "Francis Ford Coppola",
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    posterUrl: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?q=80&w=1287&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?q=80&w=1287&auto=format&fit=crop"
  },
  {
    id: "tt0468569",
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    runtime: "2h 32m",
    genres: ["Action", "Crime", "Drama"],
    director: "Christopher Nolan",
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    posterUrl: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=1374&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=1374&auto=format&fit=crop"
  },
  {
    id: "tt0167260",
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    rating: 9.0,
    runtime: "3h 21m",
    genres: ["Action", "Adventure", "Drama"],
    director: "Peter Jackson",
    actors: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
    plot: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    posterUrl: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1287&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1287&auto=format&fit=crop"
  },
  {
    id: "tt0080684",
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
    rating: 8.7,
    runtime: "2h 4m",
    genres: ["Action", "Adventure", "Fantasy"],
    director: "Irvin Kershner",
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    plot: "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
    posterUrl: "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?q=80&w=1528&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?q=80&w=1528&auto=format&fit=crop"
  },
  {
    id: "tt1375666",
    title: "Inception",
    year: 2010,
    rating: 8.8,
    runtime: "2h 28m",
    genres: ["Action", "Adventure", "Sci-Fi"],
    director: "Christopher Nolan",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    posterUrl: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=1470&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=1470&auto=format&fit=crop"
  }
];

// Featured movie (for hero section)
export const featuredMovie: Movie = {
  id: "tt1375666",
  title: "Inception",
  year: 2010,
  rating: 8.8,
  runtime: "2h 28m",
  genres: ["Action", "Adventure", "Sci-Fi"],
  director: "Christopher Nolan",
  actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
  plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  posterUrl: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=1470&auto=format&fit=crop",
  backdropUrl: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=1470&auto=format&fit=crop",
  trailerUrl: "https://www.youtube.com/watch?v=YoHD9XEInc0"
};

// Get movie by ID
export const getMovieById = (id: string): Movie | undefined => {
  return movies.find(movie => movie.id === id);
};

// Get trending movies
export const getTrendingMovies = (): Movie[] => {
  return [...movies].sort((a, b) => b.rating - a.rating);
};

// Get movies by genre
export const getMoviesByGenre = (genre: string): Movie[] => {
  return movies.filter(movie => movie.genres.includes(genre));
};

// Search movies
export const searchMovies = (query: string): Movie[] => {
  const lowercaseQuery = query.toLowerCase();
  return movies.filter(
    movie => 
      movie.title.toLowerCase().includes(lowercaseQuery) ||
      movie.director.toLowerCase().includes(lowercaseQuery) ||
      movie.actors.some(actor => actor.toLowerCase().includes(lowercaseQuery)) ||
      movie.genres.some(genre => genre.toLowerCase().includes(lowercaseQuery))
  );
};
