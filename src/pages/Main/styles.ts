import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AsideDecoration = styled.div`
  width: 10%;
  height: 100%;

  position: absolute;
  left: 0;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 2rem;
`;

export const AppTitle = styled.p`
  font-size: 3rem;
`;

export const Content = styled.div`
  width: 50%;

  margin-top: 4rem;
`;

export const ChapterTitleWrapper = styled.div`
  cursor: pointer;
`;

export const ChapterTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

export const ChapterContentWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin: 5.5rem 0 0 6.5rem;
`;

export const Text = styled.h1`
  font-style: italic;
  font-weight: normal;
`;
