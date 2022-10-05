import TheSwitcher from 'components/TheSwitcher/TheSwitcher';

import styles from './TheHeader.module.scss';


const TheHeader = () => (
  <div className={styles.theHeader} >
    <div className={styles.logo}>
      devfinder
    </div>
    <TheSwitcher />
  </div>
);

export default TheHeader;
