import { FadeEntry, TranslateEntry, Underline, Button } from '@/components';
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
  const { isLoading, passage } = usePassage();
  const { getBookByAbbrev } = useBooks();

  return (
    <S.Wrapper>
      <S.Header>
        <FadeEntry alignRow delay={DEFAULT_ANIMATION_DELAY * 2.5}>
          <S.CrossIcon />
          <S.AppTitle>Luz do Mundo</S.AppTitle>
        </FadeEntry>
      </S.Header>

      {!isLoading && Object.keys(passage).length && (
        <S.Body>
          <S.Content>
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
                onClick={() => console.log('Prev fn triggered')}
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
                onClick={() => console.log('Next fn triggered')}
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
      )}
    </S.Wrapper>
  );
};
