import {
  Loading,
  TranslateEntry,
  Underline,
  FadeEntry,
  Button
} from '@/components';
import {
  DEFAULT_ANIMATION_DELAY,
  CHAPTER_FIRST_VERSE,
  CHAPTER_LAST_VERSE
} from '@/constants';
import { capitalizeText, checkIfDisabled } from '@/utils';

import * as S from './styles';
import { useBooks } from './useBooks';
import { usePassage } from './usePassage';

export const Main = () => {
  const {
    isLoading,
    passage,
    handleGetChapter,
    handleSaveChapterIntoBookmarks,
    checkIfAlreadyBookmarked
  } = usePassage();
  const { getBookByAbbrev } = useBooks();

  return (
    <S.Wrapper>
      {!isLoading && Object.keys(passage).length ? (
        <S.Body>
          <S.Content>
            <S.ChapterWrapper>
              <S.ChapterTitleWrapper>
                <TranslateEntry
                  alignRow
                  on="XAxis"
                  delay={DEFAULT_ANIMATION_DELAY * 2}
                >
                  <S.ListIcon />
                  <S.ChapterTitle>
                    {capitalizeText(passage.book.abbrev.pt)}{' '}
                    {passage.chapter.number}
                  </S.ChapterTitle>
                </TranslateEntry>

                <TranslateEntry on="XAxis" delay={DEFAULT_ANIMATION_DELAY * 3}>
                  <Underline w="4.7rem" h="2px" />
                </TranslateEntry>
              </S.ChapterTitleWrapper>

              <FadeEntry delay={DEFAULT_ANIMATION_DELAY * 2}>
                <S.BookmarkButton
                  onClick={() => handleSaveChapterIntoBookmarks(passage)}
                >
                  {checkIfAlreadyBookmarked(passage) ? (
                    <S.BookmarkFilledIcon />
                  ) : (
                    <S.BookmarkEmptyIcon />
                  )}
                </S.BookmarkButton>
              </FadeEntry>
            </S.ChapterWrapper>

            <S.ChapterContentWrapper>
              <TranslateEntry
                on="YAxis"
                transitionType="tween"
                delay={DEFAULT_ANIMATION_DELAY * 3}
              >
                {passage.verses.map((verse) => (
                  <S.VerseWrapper key={verse.number}>
                    <S.VerseNumber>{verse.number}</S.VerseNumber>
                    <S.VerseText>{verse.text}</S.VerseText>
                  </S.VerseWrapper>
                ))}
              </TranslateEntry>
            </S.ChapterContentWrapper>
          </S.Content>

          <S.Footer>
            <TranslateEntry on="YAxis" delay={DEFAULT_ANIMATION_DELAY * 4}>
              <Button
                rounded
                hideOnDisable
                size="lg"
                isDisabled={checkIfDisabled(
                  passage.verses[0].number,
                  CHAPTER_FIRST_VERSE
                )}
                onClick={() => handleGetChapter(passage, 'prev')}
              >
                <S.BackIcon />
                <S.ButtonText>
                  {capitalizeText(passage.book.abbrev.pt)}{' '}
                  {passage.chapter.number}:{passage.verses[0].number - 1}
                </S.ButtonText>
              </Button>
            </TranslateEntry>

            <TranslateEntry on="YAxis" delay={DEFAULT_ANIMATION_DELAY * 4.5}>
              <Button
                rounded
                hideOnDisable
                size="lg"
                isDisabled={checkIfDisabled(
                  passage.verses[0].number,
                  CHAPTER_LAST_VERSE(
                    getBookByAbbrev(passage.book.abbrev.pt)!.chapters
                  )
                )}
                onClick={() => handleGetChapter(passage, 'next')}
              >
                <S.ButtonText>
                  {capitalizeText(passage.book.abbrev.pt)}{' '}
                  {passage.chapter.number}:{passage.verses[0].number + 1}
                </S.ButtonText>
                <S.NextIcon />
              </Button>
            </TranslateEntry>
          </S.Footer>
        </S.Body>
      ) : (
        <Loading />
      )}
    </S.Wrapper>
  );
};
