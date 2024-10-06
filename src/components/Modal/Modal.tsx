import { PropsWithChildren, MouseEventHandler, FC } from 'react';
import Backdrop from './Backdrop';

interface ModalProps extends PropsWithChildren {
  show: boolean;
  onClose: MouseEventHandler;
  title: string;
}

const Modal: FC<ModalProps> = ({ show, onClose, title, children }) => {
  const classList = ['modal', 'fade'];

  if (show) {
    classList.push('show');
  }

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
            <div className='modal-footer'>
              <button type='button' className='btn btn-primary' onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
