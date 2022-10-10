import React from 'react';
import * as S from './styles';
import {ITitle} from './types';

const Title = ({title}: ITitle) => {
  return <S.Title>{title}</S.Title>;
};

export default Title;
