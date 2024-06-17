import React, { useState } from 'react';
import style from './EventsListPage.module.scss';
import { useLoaderData } from 'react-router-dom';
import { ICheckEventData } from '../../../CheckEvent/types/IEventData';
import EventsList from '../list/EventsList';
import EventsListFilterPanel from '../filterPanel/EventsListFilterPanel';
import { EventType } from '../../../../../types/EventType';
import QRCode, { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';
import { observer } from 'mobx-react-lite';


const EventsListPage = observer(() => {
  const events = useLoaderData() as ICheckEventData[] ?? [];
  const [filterEvents, setFilterEvents] = useState<ICheckEventData[]>(events);

  return (
    <div>
      <div className={'_container'}>
        <div className={style.filterPanel}>
          <EventsListFilterPanel events={events} setEvents={setFilterEvents}/>
        </div>
        <div className={style.eventsList}>
          <EventsList events={filterEvents}/>            
        </div>
      </div>
    </div>
  );
})

export default EventsListPage;