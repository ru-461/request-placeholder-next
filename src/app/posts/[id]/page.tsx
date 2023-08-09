import { Post } from '@/types';

async function fetchPost(id: number) {
  // Fetch
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    throw new Error('Fetch failed.');
  }

  const data = await res.json();

  return data as Post;
}

export default async function PostDetail({
  params,
}: {
  params: { id: number };
}) {
  // Fetch
  const post = await fetchPost(params.id);

  return <>{post.title}</>;
}
