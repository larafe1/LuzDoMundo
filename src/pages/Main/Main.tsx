import { FadeEntry, TranslateEntry, Underline } from '@/components';
import { DEFAULT_ANIMATION_DELAY } from '@/constants';

import * as S from './styles';

export const Main = () => {
  return (
    <S.Wrapper>
      <S.AsideDecoration />

      <S.Header>
        <FadeEntry alignRow delay={DEFAULT_ANIMATION_DELAY * 2.5}>
          <S.CrossIcon />
          <S.AppTitle>Luz do Mundo</S.AppTitle>
        </FadeEntry>
      </S.Header>

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
            <S.Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              recusandae inventore provident eligendi, et non aperiam suscipit
              quia eos dolores doloremque magnam porro odit soluta libero rem?
              Et, praesentium sint. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. A itaque dicta, veniam ipsam labore harum ab
              dolor, exercitationem nam magni doloremque quos, sapiente minima
              hic dolorem alias facere veritatis aperiam. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Nesciunt molestiae, tempora
              mollitia fugiat impedit ullam dicta repudiandae quod cumque, nihil
              dignissimos minima accusantium voluptates ab exercitationem
              necessitatibus facere eos cum? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Similique adipisci facere
              dignissimos? Enim autem cumque quos, id natus deleniti eius a
              doloribus fugit voluptatibus est. Corrupti numquam assumenda quis
              culpa.
            </S.Text>
          </TranslateEntry>
        </S.ChapterContentWrapper>
      </S.Content>
    </S.Wrapper>
  );
};
