import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import PostsCard from '../../components/Card/PostsCard';
import Header from '../../components/Header';
import api from '../../services/api';

import * as S from './styles';

interface IPost {
  id: number;
  body: string;
  title: string;
}

const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    api.get('posts').then(response => {
      setPosts(response.data);
    });
  }, []);

  const limitStringTitle = (title: string) => {
    const post = title.length < 15 ? title : title.substring(0, 20) + '...';

    return post;
  };

  return (
    <S.Container>
      <Header title="Posts" />
      <S.Content>
        <S.Title>Yours Posts</S.Title>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={posts}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <PostsCard title={limitStringTitle(item.title)} body={item.body} />
          )}
        />
      </S.Content>
    </S.Container>
  );
};

export default Posts;
