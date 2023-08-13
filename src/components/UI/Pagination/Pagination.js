import ArrowButton from '../ArrowButton/ArrowButton';
import { additionalZeroInNumbers } from '../../../utils/helpers';

import styles from './Pagination.module.sass';

const Pagination = ({ totalItems, currentPage, onPageChange }) => {
  const handlePageChange = (type) => {
    type === 'increase'
      ? onPageChange(currentPage + 1)
      : onPageChange(currentPage - 1);
  };

  return (
    <div className={styles.Pagination}>
      <div className={styles.paginationButtons}>
        <ArrowButton
          mode="left"
          disabled={currentPage === 1 ?? false}
          onClick={() => handlePageChange('decrease')}
        />
        <ArrowButton
          mode="right"
          disabled={currentPage === totalItems ?? false}
          onClick={() => handlePageChange('increase')}
        />
      </div>
      <p className={styles.pages}>
        <span>{additionalZeroInNumbers(currentPage)}</span>
        <span className={styles.line}></span>
        <span>{additionalZeroInNumbers(totalItems)}</span>
      </p>
    </div>
  );
};

export default Pagination;
