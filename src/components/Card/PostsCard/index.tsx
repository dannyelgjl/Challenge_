import React from 'react';
import DropShadow from 'react-native-drop-shadow';
import HeartIcon from '../../../assets/icons/heart.svg';
import THEME from '../../../theme/theme';
import {IPostsCard} from './types';
import * as S from './styles';

const PostsCard = ({title, body}: IPostsCard) => {
  const styles = {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  };

  return (
    <DropShadow style={styles}>
      <S.Container>
        <S.Wrapper>
          <S.Title>{title}</S.Title>
          <HeartIcon width={22} height={19} color={THEME.SECONDARY.RED} />
        </S.Wrapper>

        <S.Description>{body}</S.Description>
      </S.Container>
    </DropShadow>
  );
};

export default PostsCard;
