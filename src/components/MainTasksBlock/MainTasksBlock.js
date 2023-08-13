import { texts } from './MainTasksBlock.config';

import oneIcon from '../../assets/icons/one-digit.svg';
import twoIcon from '../../assets/icons/two-digit.svg';

import styles from './MainTasksBlock.module.sass';

const MainTasksBlock = () => {
  return (
    <section className={styles.MainTasksBlock}>
      <div className={styles.task}>
        <img src={oneIcon} alt="first" />
        <p>{texts.first}</p>
      </div>
      <div className={styles.task}>
        <img src={twoIcon} alt="second" />
        <p>{texts.second}</p>
      </div>
    </section>
  );
};

export default MainTasksBlock;
