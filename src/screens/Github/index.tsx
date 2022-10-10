import React from 'react';
import {ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import Header from '../../components/Header';

import {Container} from './styles';

const Github: React.FC = () => {
  setTimeout(() => {
    <ActivityIndicator size="large" />;
  }, 3000);
  return (
    <Container>
      <Header title="Github" />

      <WebView source={{uri: 'https://github.com/dannyelgjl'}} />
    </Container>
  );
};

export default Github;
