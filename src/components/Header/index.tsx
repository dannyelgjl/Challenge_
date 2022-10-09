import React from 'react';
import {StatusBar} from 'react-native';
import {IHeader} from './types';
import * as S from './styles';
import THEME from '../../theme/theme';

const Header = ({title}: IHeader) => {
  return (
    <S.Container>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={THEME.PRIMARY.PRIMARY_BLUE}
      />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Header;
