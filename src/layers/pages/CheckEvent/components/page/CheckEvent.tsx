import React from 'react';
import styles from './CheckEvent.module.scss';
import { Form, redirect, useLoaderData, useNavigate } from 'react-router-dom';
import { ICheckEventData } from '../../types/IEventData';
import { Button } from '@gravity-ui/uikit';
import CheckEventGallery from '../gallery/CheckEventGallery';
import { dateTimeParse } from '@gravity-ui/date-utils';
import dayjs from '@gravity-ui/date-utils/build/dayjs';

const CheckEvent = () => {
  const event = useLoaderData() as ICheckEventData;
  const dateFrom = new Date(event.dateFrom).toLocaleDateString();
  const duration = dayjs(event.dateTo).diff(event.dateFrom, "hours").toLocaleString()
  const navigate = useNavigate();

  return (
    <div className={styles.CheckEvent}>
      <div className={[styles.CheckEventContainer, "_container"].join(" ")}>
        <div className={styles.checkEventLine}>
          <div className={styles.firstColumn}>
            <div className={styles.cover}>
              <img src={event.previewPhotoLink}/>
            </div>
            <div className={styles.buyButtonBlock}>
              <Form method="POST" action={`/buyTicket/${event.id}`}>
                <button type='submit' className={styles.buyButton}>
                  Купить билет
                </button>
              </Form>
            </div>
          </div>
          <div className={`${styles.CheckEventInfo} ${styles.secondColumn}`}>
            <div className={styles.InfoHeader}>
              <div className={styles.InfoHeaderTitle}>
                {event.title}
              </div>
              <div className={styles.date}>
                <div className={styles.dateFrom}>
                  {dateFrom}
                </div>
                <div className={styles.dateDuration}>
                  <span className='key'>Продолжительность(в часах):</span> <span className='value'>{duration}</span>
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