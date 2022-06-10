import type { ReactNode, ButtonHTMLAttributes } from 'react';

type ComponentProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonType = 'button' | 'submit' | 'reset';

type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export type ButtonProps = {
  type?: ButtonType;
  size?: ButtonSize;
  color?: string;
  outline?: boolean;
  rounded?: boolean;
  isDisabled?: boolean;
  hideOnDisable?: boolean;
} & ComponentProps;
