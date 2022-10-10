import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {Title, Header, PostsCard, Loading} from '../../components';

import api from '../../services/api';
import {limitStringTitle} from '../../utils';

import {IPost} from './types';

import * as S from './styles';

const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    api
      .get('posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <S.Container>
      <Header title="Posts" />
      <S.Content>
        <Title title="YOURS POSTs" />

        <FlatList
          ListEmptyComponent={<Loading />}
          showsVerticalScrollIndicator={false}
          data={posts}
          keyExtractor={(item: IPost) => String(item.id)}
          renderItem={({item}) => (
            <PostsCard title={limitStringTitle(item.title)} body={item.body} />
          )}
        />
      </S.Content>
    </S.Container>
  );
};

export default Posts;
