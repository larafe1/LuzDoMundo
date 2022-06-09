import { FadeEntry, TranslateEntry, Underline } from '@/components';
import { DEFAULT_ANIMATION_DELAY } from '@/constants';
import { useBible } from '@/hooks';
import { capitalizeText } from '@/utils';

import * as S from './styles';

export const Main = () => {
  const { isLoading, passage } = useBible();

  return (
    <S.Wrapper>
      {/* <S.AsideDecoration /> */}

      <S.Header>
        <FadeEntry alignRow delay={DEFAULT_ANIMATION_DELAY * 2.5}>
          <S.CrossIcon />
          <S.AppTitle>Luz do Mundo</S.AppTitle>
        </FadeEntry>
      </S.Header>

      {!isLoading && Object.keys(passage).length && (
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
      )}
    </S.Wrapper>
  );
};
