import { AlertType } from '../../types.d';
import { PropsWithChildren, FC, MouseEventHandler } from 'react';

interface AlertProps extends PropsWithChildren {
  type: AlertType;
  clickDismissable?: boolean;
  onDismiss: MouseEventHandler;
}

const Alert: FC<AlertProps> = ({ type, clickDismissable, onDismiss, children }) => {
  return (
    <div
      className={`alert alert-${type} alert-dismissible fade show mb-0`}
      role='alert'
      style={{ display: 'block' }}
      onClick={clickDismissable ? onDismiss : undefined}
    >
      {children}
      {!clickDismissable ? <button type='button' className='btn-close' data-bs-dismiss='alert' aria-label='Close' onClick={onDismiss} /> : null}
    </div>
  );
};

export default Alert;
