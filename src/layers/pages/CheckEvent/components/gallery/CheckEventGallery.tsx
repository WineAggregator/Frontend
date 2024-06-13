import React, { useEffect, useState } from 'react';
import { useFetcher, useParams } from 'react-router-dom';
import { ICheckEventGallery } from '../../types/ICheckEventGallery';
import styles from './CheckEventGallery.module.scss';

const CheckEventGallery = () => {
  const fetcher = useFetcher<ICheckEventGallery>();
  const { eventId } = useParams();
  const [links, setLinks] = useState<string[]>([]);

  useEffect(() => {
    if (eventId != null && fetcher.state == 'idle') {
      fetcher.load(`gallery`)
    }
  }, [eventId]);

  useEffect(() => {
    setLinks(fetcher.data?.links ?? [])
  }, [fetcher.data])

  return (
    <div className={styles.gallery}>
      {
        links.length != 0 ? (
          <ul className={styles.list}>
            {
              links.map(link => (
                <li className={styles.item}>
                  <div className={styles.photoContainer}>
                    <img src={link} className={"_imgAbs"} />
                  </div>
                </li>
              ))
            }
          </ul>)
          : (
            <div className={"_emptyList"}>
              В галлереи данного события нет ни одной фотографии
            </div>
          )
      }
    </div>

  );
};

export default CheckEventGallery;