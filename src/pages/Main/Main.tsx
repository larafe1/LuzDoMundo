import { FadeEntry, TranslateEntry, Underline } from '@/components';
import { DEFAULT_ANIMATION_DELAY } from '@/constants';
import { useBible } from '@/hooks';

import * as S from './styles';

export const Main = () => {
  const { isLoading, chapter } = useBible();

  return (
    <S.Wrapper>
      <S.AsideDecoration />

      <S.Header>
        <FadeEntry alignRow delay={DEFAULT_ANIMATION_DELAY * 2.5}>
          <S.CrossIcon />
          <S.AppTitle>Luz do Mundo</S.AppTitle>
        </FadeEntry>
      </S.Header>

      {!isLoading && (
        <S.Content>
          <S.ChapterTitleWrapper>
            <TranslateEntry
              alignRow
              on="XAxis"
              delay={DEFAULT_ANIMATION_DELAY * 2.5}
            >
              <S.ListIcon />
              <S.ChapterTitle>Mt 5:14</S.ChapterTitle>
            </TranslateEntry>

            <TranslateEntry on="XAxis" delay={DEFAULT_ANIMATION_DELAY * 3.5}>
              <Underline w="6.5rem" h="2px" />
            </TranslateEntry>
          </S.ChapterTitleWrapper>

          <S.ChapterContentWrapper>
            <TranslateEntry
              on="YAxis"
              transitionType="tween"
              delay={DEFAULT_ANIMATION_DELAY * 4}
            >
              <S.Text></S.Text>
            </TranslateEntry>
          </S.ChapterContentWrapper>
        </S.Content>
      )}
    </S.Wrapper>
  );
};
