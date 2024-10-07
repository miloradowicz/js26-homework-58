import { AlertType } from '../../types.d';
import { PropsWithChildren, FC, MouseEventHandler } from 'react';

interface AlertProps extends PropsWithChildren {
  show: boolean;
  type: AlertType;
  clickDismissable?: boolean;
  onDismiss: MouseEventHandler;
}

const Alert: FC<AlertProps> = ({ show, type, clickDismissable, onDismiss, children }) => {
  const classList = ['alert', `alert-${type}`, 'alert-dismissible', 'fade'];

  if (show) {
    classList.push('show');
  }

  return (
    <div className={classList.join(' ')} role='alert' style={{ display: show ? 'block' : 'none' }} onClick={clickDismissable ? onDismiss : () => {}}>
      {children}
      {!clickDismissable ? <button type='button' className='btn-close' data-bs-dismiss='alert' aria-label='Close' onClick={onDismiss} /> : null}
    </div>
  );
};

export default Alert;
