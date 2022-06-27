import styled, { css } from 'styled-components';

import type { ButtonProps } from './types';

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;

  ${({ size }) => {
    switch (size) {
      case 'sm':
        return css`
          padding: 0 1.5rem;
        `;
      case 'md':
        return css`
          padding: 0.5rem 2rem;
        `;
      case 'lg':
        return css`
          padding: 1.5rem 3rem;
        `;
      case 'xl':
        return css`
          padding: 1.5rem 4rem;
        `;
      default:
        return css`
          padding: 0.5rem 2rem;
        `;
    }
  }}

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ rounded, theme }) => (rounded ? theme.shapes.sm : '0')};

  color: ${({ color }) => color || 'inherit'};
  background-color: ${({ theme }) => theme.colors.lightGray};

  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    filter: brightness(0.95);
  }

  &:active {
    transform: scale(0.9);
  }
`;
