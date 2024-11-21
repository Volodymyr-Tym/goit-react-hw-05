import { noInfo, srcToImageMaker } from '../../tools/toolset';

import styles from './Actor.module.css';

const Actor = ({ actorData }) => {
  const { profile_path: path, name, character } = actorData;

  return (
    <div className={styles.wrap}>
      <img className={styles.img} src={srcToImageMaker(path)} alt={name} />
      <div className={styles.info}>
        <h3>{name ? name : noInfo}</h3>
        <p className={styles.role}>({character ? character : noInfo})</p>
      </div>
    </div>
  );
};

export default Actor;
