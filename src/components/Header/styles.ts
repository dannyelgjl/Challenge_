import styled from 'styled-components/native';
import THEME from '../../theme/theme';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 74px;
  background-color: ${THEME.PRIMARY.PRIMARY_BLUE};
`;

export const Title = styled.Text`
  font-size: 30px;
  color: ${THEME.NEUTRAL.WHITE};
`;
