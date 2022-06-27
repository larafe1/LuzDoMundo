import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { RiFileList3Line } from 'react-icons/ri';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;
`;

export const Body = styled.div`
  width: 50%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  margin-top: 6.5rem;
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
  height: 35rem;

  display: flex;
  justify-content: center;

  margin: 5.5rem 0 0 6.5rem;

  overflow-y: hidden;
`;

export const VerseWrapper = styled.div`
  display: flex;
`;

export const VerseNumber = styled.h2``;

export const VerseText = styled.h1`
  margin-left: 1rem;

  font-size: 1.8rem;
  font-style: italic;
  font-weight: normal;
`;

export const Footer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  gap: 8.5rem;

  margin-bottom: 5rem;
`;

export const BackIcon = styled(BsArrowLeft)`
  width: 20px;
  height: 20px;

  margin-right: 1.5rem;

  color: ${({ theme }) => theme.colors.text};
`;

export const ButtonText = styled.h3``;

export const NextIcon = styled(BsArrowRight)`
  width: 20px;
  height: 20px;

  margin-left: 1.5rem;

  color: ${({ theme }) => theme.colors.text};
`;
