import React from 'react';
import {ActivityIndicator} from 'react-native';
import THEME from '../../theme/theme';
import * as S from './styles';

const Loading: React.FC = () => {
  return (
    <S.Container>
      <ActivityIndicator size="large" color={THEME.PRIMARY.PRIMARY_BLUE} />
    </S.Container>
  );
};

export default Loading;
