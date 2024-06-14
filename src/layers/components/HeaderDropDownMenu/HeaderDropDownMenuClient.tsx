import React from 'react';
import styles from './HeaderDropDownMenuClient.module.scss';
import { Form, Link } from 'react-router-dom';

interface IHeaderDropDownMenuClientProps {
  id: number
}

const HeaderDropDownMenuClient= ({ id }: IHeaderDropDownMenuClientProps) => {
  return (
    <div className={styles.body}>
      <div className={styles.navItem}>
        <Link to={'/myTickets'}>
          Мои билеты
        </Link>     
      </div>
    </div>
  );
};

export default HeaderDropDownMenuClient;