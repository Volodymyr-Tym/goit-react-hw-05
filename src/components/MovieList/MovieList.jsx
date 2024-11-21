import MovieListItem from '../MovieListItem/MovieListItem';

import styles from './MovieList.module.css';

const MovieList = ({ listOfMovies }) => {
  return (
    <div>
      <ul className={styles.list}>
        {listOfMovies &&
          listOfMovies.map(movie => {
            return (
              <li className={styles.item} key={movie.id}>
                <MovieListItem movie={movie} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieList;
