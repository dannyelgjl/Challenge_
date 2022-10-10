import React from 'react';
import Card from '../../components/Card';
import Header from '../../components/Header';

import * as S from './styles';

const Todo: React.FC = () => {
  return (
    <S.Container>
      <Header title="To-do" />
      <S.Content>
        <Card />

        <Card />
      </S.Content>
    </S.Container>
  );
};

export default Todo;
