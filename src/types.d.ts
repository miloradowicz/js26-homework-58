import { MouseEventHandler, ReactNode } from 'react';

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Danger = 'danger',
  Warning = 'warning',
  Info = 'info',
  Light = 'light',
  Dark = 'dark',
  Link = 'link',
}

export enum AlertType {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Danger = 'danger',
  Warning = 'warning',
  Info = 'info',
  Light = 'light',
  Dark = 'dark',
}

export interface ButtonDescription {
  type: ButtonType;
  label: string;
  onClick: MouseEventHandler;
}

export interface AlertDescription {
  id: number;
  type: AlertType;
  clickDismissable?: boolean;
  onDismiss: MouseEventHandler;
  content: ReactNode;
}
