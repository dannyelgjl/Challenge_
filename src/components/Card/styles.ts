import styled from 'styled-components/native';
import THEME from '../../theme/theme';

type Completed = {
  isCompleted?: boolean;
};

export const Container = styled.View`
  width: 100%;
  background-color: white;
  padding: 14px;
  border-radius: 8px;
  margin-top: 20px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const TitleWrapper = styled.View`
  background-color: ${THEME.SECONDARY.SECONDARY_LIGHT_BLUE};
  padding-horizontal: 20px;
  padding-vertical: 8px;
  border-radius: 28px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: ${THEME.FONT.BOLD};
  color: ${THEME.NEUTRAL.WHITE};
`;

export const Positive = styled.Text<Completed>`
  color: ${({isCompleted}) =>
    isCompleted ? `${THEME.SECONDARY.SUCCESS}` : `${THEME.SECONDARY.RED}`};
`;

export const SubTitle = styled.Text`
  font-size: 28px;
  font-weight: ${THEME.FONT.BOLD};
  color: ${THEME.PRIMARY.PRIMARY_BLUE};
  margin-top: 8px;
`;

export const DateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 24px;
`;

export const Date = styled.Text`
  font-size: 14px;
  color: ${THEME.PRIMARY.PRIMARY_BLUE};
  margin-right: 4px;
`;
