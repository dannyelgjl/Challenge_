import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import Routes from './routes';
import theme from './theme/theme';

const App = () => (
  <NavigationContainer>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </NavigationContainer>
);

export default App;
