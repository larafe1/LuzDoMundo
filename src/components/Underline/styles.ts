import styled, { css } from 'styled-components';

import type { UnderlineProps } from './types';

export const Content = styled.div<UnderlineProps>`
  width: ${({ w }) => w};
  height: ${({ h }) => h};

  ${({ mt }) =>
    mt &&
    css`
      margin-top: ${mt};
    `}

  background-color: ${({ theme }) => theme.colors.text};
`;
