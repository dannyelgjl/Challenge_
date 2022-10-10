import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import Card from '../../components/Card';
import Header from '../../components/Header';
import api from '../../services/api';

import * as S from './styles';

interface ITodo {
  id: number;
  completed: boolean;
  title: string;
}

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  console.log(todos[0]);

  useEffect(() => {
    api.get('todos').then(response => {
      setTodos(response.data);
    });
  }, []);

  return (
    <S.Container>
      <Header title="To-Dos" />
      <S.Content>
        <S.Title>Yours To-Do</S.Title>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={todos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Card
              title="Completed:"
              subTitle={item.title}
              completed={item.completed ? 'YES' : 'NO'}
              isCompleted={item.completed}
            />
          )}
        />
      </S.Content>
    </S.Container>
  );
};

export default Todo;
