import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {Header, Loading, Card, Title} from '../../components';
import api from '../../services/api';
import {IAlbums} from './types';
import * as S from './styles';

const Albums = () => {
  const [albums, setAlbums] = useState<IAlbums[]>([]);

  useEffect(() => {
    api
      .get('albums')
      .then(response => {
        setAlbums(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <S.Container>
      <Header title="Albums" />
      <S.Content>
        <Title title="YOURS ALBUMs" />

        <FlatList
          ListEmptyComponent={<Loading />}
          showsVerticalScrollIndicator={false}
          data={albums}
          keyExtractor={(item: IAlbums) => String(item.id)}
          renderItem={({item}) => (
            <Card title="Album" subTitle={item.title} isCompleted />
          )}
        />
      </S.Content>
    </S.Container>
  );
};

export default Albums;
