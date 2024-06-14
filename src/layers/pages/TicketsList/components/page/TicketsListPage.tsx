import React, { useState } from 'react';
import styles from './TicketsListPage.module.scss';
import { Link, useLoaderData } from 'react-router-dom';
import { ITicket } from '../../types/ITicket';
import { ICheckEventData } from '../../../CheckEvent/types/IEventData';
import { Button, Icon, Modal } from '@gravity-ui/uikit';
import { QRCodeSVG } from 'qrcode.react';
import { Xmark } from '@gravity-ui/icons';

interface ITicketData {
  ticket: ITicket,
  event: ICheckEventData
}

const TicketsListPage = () => {
  const tickets = useLoaderData() as ITicketData[];
  const [open, setOpen] = useState<boolean>(false);
  const defaultTicket: ITicket = {
    id: 0,
    eventId: 0,
    userId: 0,
    isActivated: false
  };
  const [currentTicket, setCurrentTicket] = useState<ITicket>(defaultTicket);

  return (
    <div className={styles.page}>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className={styles.modalBody}>
          <div className={styles.modalCloseBtn}>
            <button type='button' onClick={() => setOpen(false)}>
              <Icon data={Xmark} size={30} />
            </button>
          </div>
          <div className={styles.modalContent}>
            <div className={styles.qr}>
              <Link to={`/activateTicket/${currentTicket.id}`}>
                <QRCodeSVG value={`http://85.193.80.175/activateTicket/${currentTicket.id}`} size={500}/>              
              </Link>
            </div>
          </div>
        </div>
      </Modal>
      <div className={`${styles.pageContainer} _container`}>
        <h2 className={styles.title}>
          Мои билеты
        </h2>
        <div className={styles.list}>
          {
            tickets.map(item => (
              <div className={styles.item} key={item.ticket.id}>
                <div className={styles.header}>
                  <div className={`${styles.line} ${styles.cover}`}>
                    <Link to={`/event/${item.event.id}`}>
                      <img src={item.event.previewPhotoLink} className={"_imgAbs"} />
                    </Link>
                  </div>
                </div>
                <div className={styles.eventTitle}>
                  {item.event.title}
                </div>
                <div className={styles.dateFrom}>
                  Дата проведения:
                  <span>
                    {
                      new Date(item.event.dateFrom).toLocaleDateString()
                    }
                  </span>
                </div>
                <div className={styles.status}>
                  Cтатус:
                  <span className={item.ticket.isActivated ? styles.active : styles.unactive}>
                    {
                      item.ticket.isActivated ? "Использован" : "Не использован"
                    }
                  </span>
                </div>
                <div className={styles.qrBtn}>
                  <button type='button' onClick={() => {
                    setCurrentTicket(item.ticket);
                    setOpen(true);
                  }}>
                    Показать QR-код
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default TicketsListPage;