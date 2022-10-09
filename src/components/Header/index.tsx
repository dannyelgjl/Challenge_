import React from 'react';
import {IHeader} from './types';
import * as S from './styles';

const Header = ({title}: IHeader) => {
  return (
    <S.Container>
        <S.Title>{title}</S.Title>
    </S.Container>
  );
}

export default Header;