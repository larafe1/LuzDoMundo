import * as S from './styles';
import type { ButtonProps } from './types';

export const Button = ({
  type = 'button',
  size,
  color,
  isDisabled,
  hideOnDisable,
  children,
  ...props
}: ButtonProps) => {
  return hideOnDisable && isDisabled ? (
    <></>
  ) : (
    <S.Button
      type={type}
      size={size}
      color={color}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </S.Button>
  );
};
