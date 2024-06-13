import React, { useEffect, useRef, useState } from 'react';
import styles from './EventsListFilterPanel.module.scss';
import { ICheckEventData } from '../../../CheckEvent/types/IEventData';
import { EventType } from '../../../../../types/EventType';
import { EventTypes } from '../../../../../utils/eventTypeTypeToString';
import { UserType } from '../../../../../types/UserType';

interface IEventsListFilterPanelProps {
  events: ICheckEventData[],
  setEvents: (newEvents: ICheckEventData[]) => void
}

const EventsListFilterPanel = ({ events, setEvents }: IEventsListFilterPanelProps) => {
  const [currentOption, setCurrentOption] = useState<EventType | string>("Все события");
  const [activeBtn, setActiveBtn] = useState<Element | null>(null);

  function filterBtnClickHanler(ev: React.MouseEvent<HTMLButtonElement>, eventType: EventType | string) {
    setCurrentOption(eventType);

    if (ev.currentTarget.classList.contains(styles.active) || activeBtn == null) {
      return
    }

    activeBtn.classList.remove(styles.active)
    setActiveBtn(ev.currentTarget)
  }

  function filterEvents(currentOption: EventType | string) {
    if (currentOption == "Все события") {
      setEvents(events)
      return
    }

    setEvents(events.filter(event => event.eventType == currentOption))
  }

  useEffect(() => {
    filterEvents(currentOption);
  }, [currentOption]);

  useEffect(() => {
    activeBtn?.classList.add(styles.active)
  }, [activeBtn])
  useEffect(() => {
    if (activeBtn == null) {
      setActiveBtn(document.querySelector(`.${styles.active}`) as HTMLButtonElement);
    }
  }, [])
  return (
    <div className={styles.panel}>
      <ul className={styles.optionsList}>
        <li className={styles.optionsListBtnItem}>
          <button type="button" onClick={(ev) => filterBtnClickHanler(ev, "Все события")} className={`${styles.active} ${styles.filterBtn}`}>
            Все события
          </button>
        </li>
        {
          Object.keys(EventType).filter(key => !isNaN(Number(key))).map(type => (
            <li className={styles.optionsListBtnItem}>
              <button type="button" onClick={(ev) => filterBtnClickHanler(ev, type as any as EventType)} className={styles.filterBtn}>
                {EventTypes[type as any as EventType]}
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default EventsListFilterPanel;