import { FC } from 'react';

interface BackdropProps {
  show: boolean;
}

const Backdrop: FC<BackdropProps> = ({ show }) => {
  const classList = ['modal-backdrop', 'fade'];

  if (show) {
    classList.push('show');
  }

  return <div className={classList.join(' ')} style={{ display: show ? 'block' : 'none' }} />;
};

export default Backdrop;
