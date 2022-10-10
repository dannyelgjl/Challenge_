import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import api from '../../services/api';

import {Container} from './styles';

const Albuns: React.FC = () => {
  useEffect(() => {
    api.get('albums').then(response => {
      console.log(response.data[0]);
    });
  }, []);

  return (
    <Container>
      <Header title="Albums" />
    </Container>
  );
};

export default Albuns;
