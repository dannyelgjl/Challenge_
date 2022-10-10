import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {Title, Header, Card, Loading} from '../../components';
import api from '../../services/api';
import {ITodo} from './types';
import * as S from './styles';

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    api
      .get('todos')
      .then(response => {
        setTodos(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <S.Container>
      <Header title="To-Dos" />
      <S.Content>
        <Title title="YOURS TO-DOs" />

        <FlatList
          ListEmptyComponent={<Loading />}
          showsVerticalScrollIndicator={false}
          data={todos}
          keyExtractor={(item: ITodo) => String(item.id)}
          renderItem={({item}) => (
            <Card
              title="Completed:"
              subTitle={item.title}
              completed={item.completed ? 'YES' : 'NO'}
              isCompleted={item.completed}
              activeStatus
            />
          )}
        />
      </S.Content>
    </S.Container>
  );
};

export default Todo;
