import styled from 'styled-components/native';
import THEME from '../../theme/theme';

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: ${THEME.FONT.BOLD};
  color: ${THEME.PRIMARY.PRIMARY_BLUE};
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 8px;
`;
