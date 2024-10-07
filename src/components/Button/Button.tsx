import { ButtonType } from '../../types.d';
import { FC, MouseEventHandler } from 'react';

interface ButtonProps {
  type: ButtonType;
  label: string;
  onClick: MouseEventHandler;
}

const Button: FC<ButtonProps> = ({ type, label, onClick }) => {
  return (
    <button type='button' className={`btn btn-${type}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
