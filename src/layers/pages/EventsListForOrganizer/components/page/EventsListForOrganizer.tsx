import React from 'react';
import styles from './EventsListForOrganizer.module.scss';
import { Link, useLoaderData } from 'react-router-dom';
import { ICheckEventData } from '../../../CheckEvent/types/IEventData';
import EventsListItem from '../../../EventsList/components/item/EventsListItem';
import {Pencil} from '@gravity-ui/icons';
import { Icon } from '@gravity-ui/uikit';

const EventsListForOrganizer = () => {
  const events = useLoaderData() as ICheckEventData[];

  return (
    <div className={styles.page}>
      <div className={`${styles.pageContaienr} _container`}>
        <div className={styles.list}>
          {
            events.map((event) => (
              <div className={styles.item} key={event.id}>
                <div className={styles.toolPanel}>
                  <div className={styles.update}>
                    <Link to={`/updateEvent/${event.id}`}>
                      <Icon data={Pencil} size={20} className={styles.updateIconSvg}/>
                    </Link>
                  </div>
                </div>
                <EventsListItem item={event} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default EventsListForOrganizer;