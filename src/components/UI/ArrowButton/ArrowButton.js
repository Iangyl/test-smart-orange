import leftArrow from '../../../assets/icons/arrow-left.svg';
import rightArrow from '../../../assets/icons/arrow-right.svg';

import styles from './ArrowButton.module.sass';

const ArrowButton = ({ onClick, mode, disabled }) => {
  return (
    <button
      className={styles.button}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {mode === 'left' ? (
        <img className={styles.arrow} src={leftArrow} alt="arrow-left" />
      ) : (
        <img className={styles.arrow} src={rightArrow} alt="arrow-right" />
      )}
    </button>
  );
};

export default ArrowButton;
