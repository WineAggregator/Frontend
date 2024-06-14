import React from 'react';
import styles from './EventsListItem.module.scss';
import { EventType } from '@testing-library/react';
import { ICheckEventData } from '../../../CheckEvent/types/IEventData';
import eventTypeToString from '../../../../../utils/eventTypeTypeToString';
import dateToShortDate from '../../../../../utils/dateToShortDate';
import { Link } from 'react-router-dom';

interface IEventsListItemProps {
  item: ICheckEventData
}

const EventsListItem = ({ item }: IEventsListItemProps) => {

  return (
    <div className={styles.card}>
      <div className={`${styles.line} ${styles.header}`}>
        <div className={styles.eventType}>
          {eventTypeToString(item.eventType)}
        </div>
        <div className={styles.dateFrom}>
          <div className={styles.calendarIcon}>
            <img src={require('./calendar.png')} />
          </div>
          <div className={styles.dateFromText}>
            {new Date(item.dateFrom).toLocaleDateString()}
          </div>
        </div>
      </div>
      <div className={`${styles.line} ${styles.cover}`}>
        <Link to={`/event/${item.id}`}>
          <img src={item.previewPhotoLink} className={"_imgAbs"} />
        </Link>
      </div>
      <div className={`${styles.line} ${styles.title}`}>
        {item.title}
      </div>
      <div className={`${styles.line} ${styles.info}`}>
        <div className={styles.infoItem}>
          <div className={styles.key}>
            Организатор:
          </div>
          <div className={styles.value}>
            {item.organizerName}
          </div>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.key}>
            Адрес:
          </div>
          <div className={styles.value}>
            {item.address}
          </div>
        </div>
      </div>
      <div className={`${styles.line} ${styles.price}`}>
        <div className={styles.priceInfo}>
          {item.price} ₽
        </div>
      </div>
    </div>
  );
};

export default EventsListItem;