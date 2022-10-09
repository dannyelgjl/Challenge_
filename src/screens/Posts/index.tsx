import React from 'react';
import Header from '../../components/Header';
import api from '../../services/api';

import {Container} from './styles';

const Posts: React.FC = () => {
  React.useEffect(() => {
    api.get('posts').then(response => {
      console.log(response.data);
    });
  }, []);

  return (
    <Container>
      <Header title="Posts" />
    </Container>
  );
};

export default Posts;
