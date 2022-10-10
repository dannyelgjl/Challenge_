import React from 'react';
import DropShadow from 'react-native-drop-shadow';
import DoneIcon from '../../assets/icons/done.svg';

import * as S from './styles';

const Card: React.FC = () => {
  const styles = {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  };

  const todayDate = new Date().toISOString().slice(0, 10);
  console.log(todayDate);

  return (
    <DropShadow style={styles}>
      <S.Container>
        <S.Wrapper>
          <S.Title>Completed: YES</S.Title>
          <DoneIcon width={31} height={31} />
        </S.Wrapper>

        <S.Title>Qui est esse</S.Title>

        <S.DateContainer>
          <S.Date />
        </S.DateContainer>
      </S.Container>
    </DropShadow>
  );
};

export default Card;
