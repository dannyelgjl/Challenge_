import React from 'react';
import DropShadow from 'react-native-drop-shadow';
import DoneIcon from '../../assets/icons/done.svg';
import NoDoneIcon from '../../assets/icons/no-completed.svg';
import CalendarIcon from '../../assets/icons/calendar.svg';
import StarIcon from '../../assets/icons/star.svg';

import THEME from '../../theme/theme';

import * as S from './styles';

interface ICard {
  isCompleted: boolean;
  completed?: string;
  title?: string;
  subTitle?: string;
  activeStatus?: boolean;
}

const Card = ({
  completed,
  isCompleted,
  title,
  subTitle,
  activeStatus,
}: ICard) => {
  const styles = {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  };

  const today = new Date().toLocaleDateString('pt-BR');

  const iconsStatus = (statusIcon: boolean) => {
    return statusIcon ? (
      <DoneIcon width={31} height={31} color={THEME.SECONDARY.SUCCESS} />
    ) : (
      <NoDoneIcon width={31} height={31} color={THEME.SECONDARY.RED} />
    );
  };

  return (
    <DropShadow style={styles}>
      <S.Container>
        <S.Wrapper>
          <S.Title>
            {title}{' '}
            <S.Positive isCompleted={isCompleted}>{completed}</S.Positive>
          </S.Title>

          {activeStatus ? (
            iconsStatus(isCompleted)
          ) : (
            <StarIcon width={31} height={31} color={THEME.SECONDARY.YELLOW} />
          )}
        </S.Wrapper>

        <S.SubTitle>{subTitle}</S.SubTitle>

        <S.DateContainer>
          <S.Date>{today}</S.Date>
          <CalendarIcon
            width={16}
            height={16}
            color={THEME.PRIMARY.PRIMARY_BLUE}
          />
        </S.DateContainer>
      </S.Container>
    </DropShadow>
  );
};

export default Card;
