import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import THEME from '../../theme/theme';

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 8px;
`;

export const PostsList = styled(FlatList)`
  flex: 1;
`;
