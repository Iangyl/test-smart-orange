import CommonButton from '../UI/CommonButton/CommonButton';
import { titles } from './OurProjects.config';

import center1 from '../../assets/pictures/center1.png';
import center2 from '../../assets/pictures/center2.png';
import center3 from '../../assets/pictures/center3.png';
import center4 from '../../assets/pictures/center4.png';
import center5 from '../../assets/pictures/center5.png';
import rightArrowWhite from '../../assets/icons/arrow-right-white.svg';

import styles from './OurProjects.module.sass';

const OurProjects = () => {
  return (
    <section className={styles.OurProjects}>
      <h2>{titles.title}</h2>
      <div className={styles.flexibleContainer}>
        <div>
          <img className={styles.picture1} src={center1} alt="picture" />
          <p>{titles.name}</p>
          <a href='#' className={styles.link}>
            <span>подробнее</span>
            <img src={rightArrowWhite} alt="arrow" />
          </a>
        </div>
        <div>
          <img className={styles.picture2} src={center2} alt="picture" />
        </div>
        <div>
          <img className={styles.picture3} src={center3} alt="picture" />
        </div>
        <div>
          <img className={styles.picture4} src={center4} alt="picture" />
        </div>
        <div>
          <img className={styles.picture5} src={center5} alt="picture" />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <CommonButton className={styles.button}>
          <span>вce проекты</span>
          <img src={rightArrowWhite} alt="arrow" />
        </CommonButton>
      </div>
    </section>
  );
};

export default OurProjects;
