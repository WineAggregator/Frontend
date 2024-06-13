import React from 'react';
import styles from "./EventsList.module.scss";
import { ICheckEventData } from '../../../CheckEvent/types/IEventData';
import { useLoaderData } from 'react-router-dom';
import EventsListItem from '../item/EventsListItem';

interface IEventsListProps {
  events: ICheckEventData[]
}

const EventsList = ({ events }: IEventsListProps) => {

  return (
    <div className={styles.container}>
      {
        events.length != 0 ? (
          <ul className={styles.eventsList}>
            {
              events.map((item) => (<li className={styles.item} key={item.id}>
                <EventsListItem item={item}/>
                </li>))
            }
          </ul>
        ) : (
          <div className={"_emptyList"}>
            На сайте пока что нет ни одного события
          </div>
        )
      }
    </div>
  );
};

export default EventsList;