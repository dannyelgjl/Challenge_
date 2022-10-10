import styled from 'styled-components/native';
import THEME from '../../../theme/theme';

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

export const Title = styled.Text`
  font-size: 28px;
  font-weight: ${THEME.FONT.BOLD};
  color: ${THEME.PRIMARY.PRIMARY_BLUE};
`;

export const Description = styled.Text`
  font-size: 14px;
  color: ${THEME.PRIMARY.PRIMARY_BLUE};
  margin-top: 35px;
`;
