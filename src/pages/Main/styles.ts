import { RiFileList3Line } from 'react-icons/ri';
import { TbCross } from 'react-icons/tb';
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

  box-shadow: ${({ theme }) => theme.boxShadows.dark};

  background-color: ${({ theme }) => theme.colors.text};
`;

export const Header = styled.div`
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 2rem;
`;

export const CrossIcon = styled(TbCross)`
  width: 24px;
  height: 24px;

  margin-right: 0.8rem;

  color: ${({ theme }) => theme.colors.text};
`;

export const AppTitle = styled.p`
  font-size: 2.5rem;
`;

export const Content = styled.div`
  width: 50%;

  margin-top: 4rem;
`;

export const ChapterTitleWrapper = styled.div`
  cursor: pointer;
`;

export const ListIcon = styled(RiFileList3Line)`
  width: 24px;
  height: 24px;

  margin-right: 0.4rem;

  color: ${({ theme }) => theme.colors.text};
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

export const VerseWrapper = styled.div`
  display: flex;
`;

export const VerseNumber = styled.h2``;

export const VerseText = styled.h1`
  margin-left: 1rem;

  font-style: italic;
  font-weight: normal;
`;
