import { useState } from 'react';
import Pagination from '../UI/Pagination/Pagination';
import CommonButton from '../UI/CommonButton/CommonButton';
import rightArrow from '../../assets/icons/arrow-right.svg';
import { name, homePictures } from './TitleBlock.config';

import styles from './TitleBlock.module.sass';

const TitleBlock = () => {
  const heading = name.split(' ');
  const [page, setPage] = useState(1);

  return (
    <section className={styles.TitleBlock}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          {heading[0] + ' '}
          <span>{heading[1]}</span>
        </h1>
        <div className={styles.paginationContainer}>
          <Pagination
            currentPage={page}
            onPageChange={setPage}
            totalItems={homePictures.length}
          />
        </div>
      </div>
      <div className={styles.right}>
        <img
          className={styles.picture}
          src={homePictures[page].picture}
          alt={homePictures[page].id}
        />
        <CommonButton className={styles.button}>
          <span>взглянуть</span>
          <img src={rightArrow} alt="arrow" />
        </CommonButton>
      </div>
    </section>
  );
};

export default TitleBlock;
