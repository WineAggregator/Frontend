import React from 'react';
import styles from './HeaderDropDownMenuOrganizer.module.scss';
import { Form, Link } from 'react-router-dom';

interface IHeaderDropDownMenuOrganizerProps {
  id: number
}

const HeaderDropDownMenuOrganizer = ({ id }: IHeaderDropDownMenuOrganizerProps) => {
  return (
    <div className={styles.body}>
      <div className={styles.navItem}>
        <Form method='POST' action='/createEvent'>
          <button type='submit'>
            Создать событие
          </button>
        </Form>        
      </div>
      <div className={styles.navItem}>
        <Link to={'/myEvents'}>
          Мои события
        </Link>     
      </div>
      <div className={styles.navItem}>
        <Link to={'/myTickets'}>
          Мои билеты
        </Link>     
      </div>
    </div>
  );
};

export default HeaderDropDownMenuOrganizer;