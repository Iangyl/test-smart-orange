import CommonButton from '../UI/CommonButton/CommonButton';
import { title, text } from './AboutCompanyBlock.config';

import picture1 from '../../assets/pictures/big-about.png';
import picture3 from '../../assets/pictures/small-about.png';
import picture2 from '../../assets/pictures/middle-about.png';
import rightArrow from '../../assets/icons/arrow-right.svg';

import styles from './AboutCompanyBlock.module.sass';

const AboutCompanyBlock = () => {
  return (
    <section className={styles.AboutCompanyBlock}>
      <div className={styles.column1}>
        <img src={picture2} alt="middle" />
        <img src={picture3} alt="small" />
      </div>
      <div className={styles.column2}>
        <img src={picture1} alt="big" />
      </div>
      <div className={styles.column3}>
        <h2>{title}</h2>
        <p>{text}</p>
        <CommonButton className={styles.button}>
          <span>читать</span>
          <img src={rightArrow} alt="arrow" />
        </CommonButton>
      </div>
    </section>
  );
};

export default AboutCompanyBlock;
