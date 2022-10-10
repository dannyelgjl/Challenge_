import React from 'react';
import {WebView} from 'react-native-webview';
import {Header} from '../../components';

import {Container} from './styles';

const Github: React.FC = () => {
  return (
    <Container>
      <Header title="Github" />

      <WebView
        source={{uri: 'https://github.com/dannyelgjl'}}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Github;
