import { FadeEntry, TranslateEntry, Underline } from '@/components';
import { DEFAULT_ANIMATION_DELAY } from '@/constants';

import * as S from './styles';

export const Main = () => {
  return (
    <S.Wrapper>
      {/* <S.AsideDecoration /> */}
      <S.Header>
        <FadeEntry delay={DEFAULT_ANIMATION_DELAY * 2.5}>
          <S.AppTitle>Luz do Mundo</S.AppTitle>
        </FadeEntry>
      </S.Header>

      <S.Content>
        <S.ChapterTitleWrapper>
          <TranslateEntry on="XAxis" delay={DEFAULT_ANIMATION_DELAY * 2.5}>
            <S.ChapterTitle>Mt 5:14</S.ChapterTitle>
          </TranslateEntry>
          <TranslateEntry on="XAxis" delay={DEFAULT_ANIMATION_DELAY * 3.5}>
            <Underline w="6.5rem" h="2px" />
          </TranslateEntry>
        </S.ChapterTitleWrapper>

        <S.ChapterContentWrapper>
          <TranslateEntry on="YAxis" delay={DEFAULT_ANIMATION_DELAY * 4}>
            <S.Text>
              &quot;Vocês são a luz do mundo. Não se pode esconder uma cidade
              construída sobre um monte.&quot;
            </S.Text>
          </TranslateEntry>
        </S.ChapterContentWrapper>
      </S.Content>
    </S.Wrapper>
  );
};
