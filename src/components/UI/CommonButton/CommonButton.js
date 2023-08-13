import styles from './CommonButton.module.sass';

const CommonButton = ({
  type,
  children,
  className,
  style,
  disabled,
  onClick,
}) => (
  <button
    type={type}
    className={`${styles.button} ${className}`}
    style={style}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default CommonButton;
