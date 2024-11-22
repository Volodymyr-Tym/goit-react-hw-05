import { useNavigate } from 'react-router-dom';

import { TfiBackLeft } from 'react-icons/tfi';

import styles from './GoBack.module.css';

const GoBack = ({ path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div className={styles.wrap}>
      <button className={styles.back} type="button" onClick={handleClick}>
        Go back
        <TfiBackLeft className={styles.ico} />
      </button>
    </div>
  );
};

export default GoBack;
