import React from 'react';
import styles from './CheckEvent.module.scss';
import { useLoaderData } from 'react-router-dom';
import { ICheckEventData } from '../../types/IEventData';
import { Button } from '@gravity-ui/uikit';
import CheckEventGallery from '../gallery/CheckEventGallery';

const CheckEvent = () => {
  const event = useLoaderData() as ICheckEventData;

  return (
    <div className={styles.CheckEvent}>
      <div className={[styles.CheckEventContainer, "_container"].join(" ")}>
        <div className={styles.checkEventLine}>
          <div className={styles.firstColumn}>
            <div className={styles.cover}>
              <img src='https://nogtipro.com/wp-content/uploads/2023/11/sa-3.jpg'/>
            </div>
            <div className={styles.buyButtonBlock}>
              <Button view='action' className={styles.buyButton}>
                Купить
              </Button>
            </div>
          </div>
          <div className={`${styles.CheckEventInfo} ${styles.secondColumn}`}>
            <div className={styles.InfoHeader}>
              <div className={styles.InfoHeaderTitle}>
                {event.title}
              </div>
              <div className={styles.date}>
                <div className={styles.dateFrom}>
                  24/04/2024
                </div>
                <div className={styles.dateDuration}>
                  <span className='key'>Продолжительность:</span> <span className='value'>2 часа</span>
                </div>
              </div>
            </div>
            <div className={styles.InfoContent}>
              <div className={styles.InfoContentLine}>
                <div className={styles.InfoContentLine__Key}>
                  О мероприятии:
                </div>
                <div className={styles.InfoContentLine__Value}>
                  {event.description}
                </div>
              </div>
              <div className={styles.InfoContentLine}>
                <div className={styles.InfoContentLine__Key}>
                  Организатор:
                </div>
                <div className={styles.InfoContentLine__Value}>
                  {event.organizerName}
                </div>
              </div>
              <div className={styles.InfoContentLine}>
                <div className={styles.InfoContentLine__Key}>
                  Адрес:
                </div>
                <div className={styles.InfoContentLine__Value}>
                  {event.address}
                </div>
              </div>
              <div className={styles.InfoContentLine}>
                <div className={styles.InfoContentLine__Key}>
                  Цена:
                </div>
                <div className={styles.InfoContentLine__Value}>
                  <span className={styles.prive}>{event.price} ₽</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.checkEventLine}>
          <div className={styles.GalleryTitle}>
            Галерея:
          </div>
          <div className={styles.CheckEventGallery}>
            <CheckEventGallery/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckEvent;