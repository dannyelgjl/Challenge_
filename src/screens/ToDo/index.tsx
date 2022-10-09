import React from 'react';
import Header from '../../components/Header';

import {Container} from './styles';

const ToDo: React.FC = () => {
  return (
    <Container>
      <Header title="To-Do's" />
    </Container>
  );
};

export default ToDo;
