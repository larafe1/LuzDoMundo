import { PropagateLoader } from 'react-spinners';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  inset: 50%;
`;

export const LoadingText = styled.p`
  font-size: 1.25rem;
`;

export const Loader = styled(PropagateLoader).attrs({
  color: 'rgba(0, 9, 44, 0.8)',
  size: 12
})`
  margin-top: 2rem;
`;
