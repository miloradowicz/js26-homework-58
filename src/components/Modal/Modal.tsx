import { ButtonDescription, ButtonType } from '../../types.d';
import { PropsWithChildren, MouseEventHandler, FC, MouseEvent } from 'react';
import Backdrop from './Backdrop';
import Button from '../Button/Button';

interface ModalProps extends PropsWithChildren {
  show: boolean;
  onClose: MouseEventHandler;
  title: string;
  controls: ButtonDescription[];
}

const Modal: FC<ModalProps> = ({ show, onClose, title, controls, children }) => {
  const classList = ['modal', 'fade'];

  if (show) {
    classList.push('show');
  }

  const buttons = controls.length > 0 ? controls.map((x, i) => <Button key={i} type={x.type} label={x.label} onClick={x.onClick} />) : null;

  return (
    <div>
      <Backdrop show={show} />
      <div className={classList.join(' ')} tabIndex={-1} role='dialog' style={{ display: show ? 'block' : 'none' }}>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5'>{title}</h1>
              <button type='button' className='btn-close' aria-label='Close' onClick={onClose} />
            </div>
            <div className='modal-body'>{children}</div>
            <div className='modal-footer'>{buttons}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
