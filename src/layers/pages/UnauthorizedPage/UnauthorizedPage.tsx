import React from 'react';
import styles from './UnauthorizedPage.module.scss';

const UnauthorizedPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        Чтобы продолжить работу на сайте, авторизуйтесь!
      </div>
    </div>
  );
};

export default UnauthorizedPage;