import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../api/movies';

const MovieList = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const data = await getTrendingMovies();

        setMovies(data.results);
        console.log('data.results', data.results);
        console.log('movies', movies);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <ul>
        {movies !== null &&
          movies.map(movie => {
            return (
              <li key={movie.id}>
                <p>{movie.title}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieList;
