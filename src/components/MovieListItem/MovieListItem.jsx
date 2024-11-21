import { Link } from 'react-router-dom';

import { srcToImageMaker } from '../../tools/toolset';

import styles from './MovieListItem.module.css';

const MovieListItem = ({ movie }) => {
  const { backdrop_path: path, title, id } = movie;

  return (
    <div>
      <Link to={`/movies/${id}`}>
        <img className={styles.img} src={srcToImageMaker(path)} alt={title} />
        <p className={styles.title}>{title}</p>
      </Link>
    </div>
  );
};

export default MovieListItem;
