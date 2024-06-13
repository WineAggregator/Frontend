import { Button, Icon, Modal } from '@gravity-ui/uikit';
import React, { ReactNode } from 'react';
import {SquareXmark, Xmark} from '@gravity-ui/icons';
import SquareXmarkIcon from '@gravity-ui/icons/svgs/square-xmark.svg';
import style from './ModalWindow.module.scss';

interface IModalWindowProps {
  open: boolean
  setOpen: (newValue: boolean) => void
  children: ReactNode
}
const ModalWindow = ({ open, setOpen, children }: IModalWindowProps) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)} className={style.modal}>
      <div className={style.content}>
        <Button view="flat" className={style.closeBtn} onClick={() => setOpen(false)}>
          <Icon data={SquareXmark} size={25} fill="#13f0aa" className={style.closeIcon}/>
        </Button>
      {children}        
      </div>
    </Modal>
  );
};

export default ModalWindow;