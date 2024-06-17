import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import cssStyles from './Notification.module.scss';

interface INotificationProps {
  lifeTimeInMS: number
  styles: string
  visible: boolean,
  setVisible: (newVisible: boolean) => void
}

const Notification:FC<PropsWithChildren<INotificationProps>> = ({children, lifeTimeInMS, styles, visible, setVisible}) => {

  useEffect(() => {
    if (visible) {
      setTimeout(() => setVisible(false), lifeTimeInMS)
    }
    
  }, [visible])
  return (
    <div className={`${styles} ${cssStyles.container} ${visible ? cssStyles.active : ""}`}>
      {
        children
      }
    </div>
  );
};

export default Notification;