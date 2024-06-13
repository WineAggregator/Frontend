import React from 'react';
import styles from './EventsListItem.module.scss';
import { EventType } from '@testing-library/react';
import { ICheckEventData } from '../../../CheckEvent/types/IEventData';
import eventTypeToString from '../../../../../utils/eventTypeTypeToString';
import dateToShortDate from '../../../../../utils/dateToShortDate';

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
            {dateToShortDate(item.dateFrom)}
          </div>
        </div>
      </div>
      <div className={`${styles.line} ${styles.cover}`}>
        <img src={item.previewPhotoLink} className={"_imgAbs"}/>
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