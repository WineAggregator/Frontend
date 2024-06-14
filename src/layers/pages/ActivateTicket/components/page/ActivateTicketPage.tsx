import React from 'react';
import styles from './ActivateTicketPage.module.scss';
import { ITicket } from '../../../TicketsList/types/ITicket';
import { ICheckEventData } from '../../../CheckEvent/types/IEventData';
import { Form, useLoaderData } from 'react-router-dom';

interface IActivateTicketData {
  isOrganizer: boolean,
  ticket: ITicket,
  event: ICheckEventData
}

const ActivateTicketPage = () => {
  const checkData = useLoaderData() as IActivateTicketData;

  return (
    <div className={styles.page}>
      <div className={`${styles.pageContainer} _container`}>
        <div className={styles.pageTitle}>
          Активация билета
        </div>
        <div className={styles.body}>
          <div className={styles.eventCard}>
            <div className={styles.cover}>
              <img src={checkData.event.previewPhotoLink} />
            </div>
            <div className={styles.eventContent}>
              <div className={styles.eventTitle}>
                {checkData.event.title}
              </div>
              <div className={styles.dateTo}>
                Дата события:
                <span>
                  {
                    new Date(checkData.event.dateTo).toLocaleDateString()
                  }
                </span>
              </div>
              <div className={styles.eventOrganizer}>
                Организатор: <span>{checkData.event.organizerName}</span>
              </div>
              <div className={styles.eventPrice}>
                Цена:
                <span>
                  {checkData.event.price}₽
                </span>
              </div>
              <div className={styles.ticketStatus}>
                Cтатус:
                <span className={checkData.ticket.isActivated ? styles.active : styles.unactive}>
                  {
                    checkData.ticket.isActivated ? "Использован" : "Не использован"
                  }
                </span>
              </div>
            </div>
          </div>
          <div className={styles.activateBlock}>
            {
              checkData.isOrganizer ? (
                <div className={styles.activateBtn}>
                  <Form method="POST" action={`/activateTicket/${checkData.ticket.id}`}>
                    <button type='submit' disabled={checkData.ticket.isActivated}>
                      {
                        checkData.ticket.isActivated ? "Билет активирован" : "Активировать билет"
                      }
                    </button>
                  </Form>
                </div>
              ) : (
                <div className={styles.lockActivate}>
                  Вы не являетесь организатором данного события, поэтому не можете его активировать
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivateTicketPage;