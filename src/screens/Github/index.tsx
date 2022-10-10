import React from 'react';
import {WebView} from 'react-native-webview';
import Header from '../../components/Header';

import {Container} from './styles';

const Github: React.FC = () => {
  return (
    <Container>
      <Header title="Github" />

      <WebView source={{uri: 'https://github.com/dannyelgjl'}} />
    </Container>
  );
};

export default Github;
