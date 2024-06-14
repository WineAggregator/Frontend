import React, { useEffect, useState } from 'react';
import { useFetcher, useLoaderData, useParams } from 'react-router-dom';
import styles from './UpdateEvent.module.scss';
import { ICheckEventData } from '../../CheckEvent/types/IEventData';
import UploaderImg from '../../../components/UploaderImg/components/UploaderImg';
import { API_URL } from '../../../../http';
import { DatePicker } from '@gravity-ui/date-components';
import { Button, RadioButton, RadioButtonOption } from '@gravity-ui/uikit';
import { dateTime, dateTimeParse } from '@gravity-ui/date-utils';
import { EventType } from '../../../../types/EventType';

const UpdateEvent = () => {
  const { eventId } = useParams();
  const event = useLoaderData() as ICheckEventData;
  const fetcher = useFetcher<ICheckEventData>();
  const [isNew, setIsNew] = useState<boolean>(eventId == 'new');
  const options: RadioButtonOption[] = [
    { value: '0', content: 'Дегустация' },
    { value: '1', content: 'Мастер-класс' },
  ];

  return (
    <div className={styles.page}>
      <div className={`${styles.pageContainer} _container`}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.coverBlock}>
              <div className={styles.coverBlockTitle}>
                <h3>
                  Обложка события
                </h3>
              </div>
              <UploaderImg
                photoAlt='cover'
                targetPath={`${API_URL}events/${eventId}/preview`}
                styles={[styles.uploadCover]}
                defaultLink={event.previewPhotoLink}
              />
            </div>
          </div>
          <div className={`${styles.column} ${styles.mainInfo}`}>
            <h3 className={styles.mainInfoTitle}>
              Основная информация
            </h3>
            <fetcher.Form method='POST' action={`/updateEvent/${eventId}`} className={styles.mainInfoForm} onSubmit={() => {
              const s = 0;
            }}>
              <div className={styles.mainInfoColumn}>
                <div className={styles.formField}>
                  <label>
                    <div className={styles.formFieldText}>
                      Название мероприятия
                    </div>
                    <div className={styles.formFieldInput}>
                      <input type='text' name="title" defaultValue={event.title} className={styles.inputText} />
                    </div>
                  </label>
                </div>
                <div className={styles.formField}>
                  <label>
                    <div className={styles.formFieldText}>
                      О мероприятии
                    </div>
                    <div className={styles.formFieldInput}>
                      <textarea name={"description"} defaultValue={event.description} className={styles.description} />
                    </div>
                  </label>
                </div>
                <div className={styles.formField}>
                  <label>
                    <div className={styles.formFieldText}>
                      Организатор
                    </div>
                    <div className={styles.formFieldInput}>
                      <input type='text' name="organizerName" defaultValue={event.organizerName} className={styles.inputText} />
                    </div>
                  </label>
                </div>
                <div className={styles.formField}>
                  <label>
                    <div className={styles.formFieldText}>
                      Адрес
                    </div>
                    <div className={styles.formFieldInput}>
                      <input type='text' name="address" defaultValue={event.address} className={styles.inputText} />
                    </div>
                  </label>
                </div>
              </div>
              <div className={`${styles.mainInfoColumn} ${styles.mainInfoColumnSecond}`}>
                <div className={styles.formField}>
                  <label>
                    <div className={styles.formFieldText}>
                      Цена
                    </div>
                    <div className={styles.formFieldInput}>
                      <input type='number' min="0" name="price" defaultValue={event.price} className={styles.inputText} />
                    </div>
                  </label>
                </div>
                <div className={styles.formField}>
                  <label>
                    <div className={styles.formFieldText}>
                      Дата начала
                    </div>
                    <div className={styles.formFieldInput}>
                      <DatePicker className={styles.dateInput} size='l' defaultValue={dateTimeParse(event.dateFrom)}
                      format='DD/MM/YY hh:mm'
                      name='dateFrom'/>
                    </div>
                  </label>
                </div>
                <div className={styles.formField}>
                  <label>
                    <div className={styles.formFieldText}>
                      Дата окончания
                    </div>
                    <div className={styles.formFieldInput}>
                      <DatePicker className={styles.dateInput} size='l' defaultValue={dateTimeParse(event.dateTo)}
                      format='DD/MM/YY hh:mm'
                      name='dateTo'/>
                    </div>
                  </label>
                </div>
                <div className={styles.formField}>
                  <label>
                    <div className={styles.formFieldText}>
                      Тип мероприятия
                    </div>
                    <div className={styles.formFieldInput}>
                      <RadioButton name='eventType' defaultValue={event.eventType == EventType.Degustation ? options[0].value : options[1].value} options={options} className={styles.radio}/>
                    </div>
                  </label>
                </div>
                <div className={styles.submitBtnBlock}>
                  <Button type='submit' className={styles.submitBtn}>
                    Сохранить изменения
                  </Button>
                </div>
              </div>
            </fetcher.Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateEvent;