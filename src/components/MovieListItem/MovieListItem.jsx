import { srcToImageMaker } from '../../tools/toolset';

import styles from './MovieListItem.module.css';

const MovieListItem = ({ movie }) => {
  const { backdrop_path: path, title } = movie;

  return (
    <div>
      <img className={styles.img} src={srcToImageMaker(path)} alt={title} />

      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default MovieListItem;
