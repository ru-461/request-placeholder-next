import { Box } from '@/components';
import { Post } from '@/types';

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) {
    throw new Error('Fetch failed.');
  }

  const data = await res.json();

  return data as Post[];
}

export default async function Posts() {
  // Fetch from API.
  const posts = await fetchPosts();

  return (
    <Box>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.id}</li>
        ))}
      </ul>
    </Box>
  );
}
