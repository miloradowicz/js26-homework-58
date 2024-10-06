import { PropsWithChildren, FC, MouseEventHandler } from 'react';

interface AlertProps extends PropsWithChildren {
  show: boolean;
  onClose: MouseEventHandler;
}

const Alert: FC<AlertProps> = ({ show, onClose, children }) => {
  const classList = ['alert', 'alert-warning', 'alert-dismissible', 'fade'];

  if (show) {
    classList.push('show');
  }

  return (
    <div className={classList.join(' ')} role='alert' style={{ display: show ? 'block' : 'none' }}>
      {children}
      <button type='button' className='btn-close' data-bs-dismiss='alert' aria-label='Close' onClick={onClose} />
    </div>
  );
};

export default Alert;
