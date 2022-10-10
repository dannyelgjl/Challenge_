import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import Card from '../../components/Card';
import Header from '../../components/Header';
import api from '../../services/api';
import {ITodo} from './types';
import * as S from './styles';
import Loading from '../../components/Loading';

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  console.log(todos[0]);

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
        <S.Title>Yours To-Do</S.Title>

        {todos ? (
          <FlatList
            ListEmptyComponent={<Loading />}
            showsVerticalScrollIndicator={false}
            data={todos}
            keyExtractor={item => item.id}
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
        ) : (
          <Loading />
        )}
      </S.Content>
    </S.Container>
  );
};

export default Todo;
