export const limitStringTitle = (title: string) => {
  const post = title.length < 18 ? title : title.substring(0, 20) + '...';

  return post;
};
