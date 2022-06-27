import { FadeEntry } from '@/components';

import * as S from './styles';

export const Loading = () => {
  return (
    <FadeEntry>
      <S.Wrapper>
        <S.LoadingText>Loading</S.LoadingText>
        <S.Loader />
      </S.Wrapper>
    </FadeEntry>
  );
};
