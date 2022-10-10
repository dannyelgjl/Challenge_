import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {limitStringTitle} from '../../utils';
import PostsCard from '../../components/Card/PostsCard';
import Header from '../../components/Header';
import api from '../../services/api';
import Loading from '../../components/Loading';
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
        <S.Title>Yours Posts</S.Title>
        {posts ? (
          <FlatList
            ListEmptyComponent={<Loading />}
            showsVerticalScrollIndicator={false}
            data={posts}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <PostsCard
                title={limitStringTitle(item.title)}
                body={item.body}
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

export default Posts;
