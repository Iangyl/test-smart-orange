import { navigationLinks, contactInfo, socialIcons } from './AppWrapper.config';
import logoHeader from '../../assets/icons/logoHeader.svg';
import logoFooter from '../../assets/icons/logoFooter.svg';
import styles from './AppWrapper.module.sass';

const AppWrapper = ({ children }) => (
  <main>
    <header className={styles.header}>
      <div className="wrapper">
        <div className={styles.container}>
          <img src={logoHeader} alt="logo" />
          <ul className={styles.ulinks}>
            {navigationLinks.map((item, idx) => (
              <li key={idx}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
    <section>
      <div className="wrapper">{children}</div>
    </section>
    <footer className={styles.footer}>
      <div className="wrapper">
        <div className={styles.topSection}>
          <div className={styles.logoContainer}>
            <img src={logoFooter} alt="logo" />
          </div>
          <div className={styles.infoContainer}>
            <div>
              <h5>Информация</h5>
              <ul className={styles.botlinks}>
                {navigationLinks.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.href}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5>Контакты</h5>
              <ul className={styles.contactInfo}>
                {contactInfo.map((item, idx) => (
                  <li key={idx}>
                    <img src={item.img} alt={idx} />
                    <p>{item.info}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5>Социальные сети</h5>
              <ul className={styles.socialIcons}>
                {socialIcons.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.href}>
                      <img src={item.img} alt={idx} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </footer>
  </main>
);

export default AppWrapper;
