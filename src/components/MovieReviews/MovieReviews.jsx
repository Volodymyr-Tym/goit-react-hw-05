import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieReviewsById } from '../../api/movies';
import { dataTimeMaker } from '../../tools/toolset';
import { FaRegComment } from 'react-icons/fa';
import { BsPersonWorkspace } from 'react-icons/bs';
import { TbCalendarTime } from 'react-icons/tb';

import Loader from '../Loader/Loader';
import Error from '../Error/Error';

import styles from './MovieReviews.module.css';

const MovieReviews = () => {
  const params = useParams();
  const [movieReviews, setMovieReviews] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const findMovieReviews = async id => {
    try {
      setIsLoading(true);

      const data = await fetchMovieReviewsById(id);

      setMovieReviews(data.results);
      isError !== null ? setIsError(null) : isError;
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    findMovieReviews(params.movieId);
  }, []);

  useEffect(() => {}, [movieReviews]);

  return (
    <div className={styles.wrap}>
      {isLoading && <Loader />}
      {isError && <Error err={isError} />}
      <h2 className={styles.title}>Reviews</h2>
      {Array.isArray(movieReviews) && movieReviews.length === 0 ? (
        <p>There are no comments yet</p>
      ) : (
        <>
          <ul className={styles.list}>
            {movieReviews &&
              movieReviews.map(review => {
                return (
                  <li className={styles.card} key={review.id}>
                    <div className={styles.wrap_comment}>
                      <h3 className={styles.author}>
                        <BsPersonWorkspace className={styles.ico} />
                        {review.author}
                      </h3>
                      <p className={styles.text}>
                        <FaRegComment className={styles.ico_comment} />
                        {review.content}
                      </p>
                      <p className={styles.date}>
                        <TbCalendarTime className={styles.ico} />
                        {dataTimeMaker(review.created_at)}
                      </p>
                    </div>
                  </li>
                );
              })}
          </ul>
        </>
      )}
    </div>
  );
};

export default MovieReviews;
