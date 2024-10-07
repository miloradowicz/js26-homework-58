import { FC, MouseEventHandler } from 'react';

interface BackdropProps {
  show: boolean;
  onClick: MouseEventHandler;
}

const Backdrop: FC<BackdropProps> = ({ show, onClick }) => {
  const classList = ['modal-backdrop', 'fade'];

  if (show) {
    classList.push('show');
  }

  return <div className={classList.join(' ')} style={{ display: show ? 'block' : 'none' }} onClick={onClick} />;
};

export default Backdrop;
