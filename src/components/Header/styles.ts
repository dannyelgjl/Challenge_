import styled from 'styled-components/native';
import {Platform} from 'react-native'

import THEME from '../../theme/theme';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90px;
  background-color: ${THEME.PRIMARY.PRIMARY_BLUE};

  padding-top: ${Platform.OS === 'ios' ? 20 : 0}
`;

export const Title = styled.Text`
  font-size: 30px;
  color: ${THEME.SECONDARY.SECONDARY_LIGHT_BLUE};
`;
