import CommonButton from '../UI/CommonButton/CommonButton';
import { title, additional } from './ContactUs.config';

import contactUsPicture from '../../assets/pictures/contact-us.png';
import rightArrowWhite from '../../assets/icons/arrow-right-white.svg';
import styles from './ContactUs.module.sass';

const ContactUs = () => {
  return (
    <section className={styles.ContactUs}>
      <h2>{title}</h2>
      <div className={styles.container}>
        <div className={styles.left}>
          <input
            className={styles.input}
            name="name"
            type="text"
            required
            placeholder="Имя"
          />
          <input
            className={styles.input}
            name="phone"
            type="tel"
            required
            placeholder="Номер телефона"
          />
          <input
            className={styles.input}
            name="email"
            type="email"
            required
            placeholder="E-mail"
          />
          <input
            className={styles.input}
            name="product"
            type="text"
            required
            placeholder="Интересующая товар/услуга"
          />
          <textarea
            className={`${styles.input} ${styles.textArea}`}
            name="message"
            required
            placeholder="Сообщение"
          ></textarea>
        </div>
        <div className={styles.right}>
          <img className={styles.img} src={contactUsPicture} alt="contact us" />
        </div>
      </div>
      <p className={styles.additional}>{additional}</p>
      <div className={styles.buttonContainer}>
        <CommonButton className={styles.button}>
          <span>отправить</span>
          <img src={rightArrowWhite} alt="arrow" />
        </CommonButton>
      </div>
    </section>
  );
};

export default ContactUs;
