import { Box, Divider, Heading, SimpleGrid, Stack } from '@/components/common';
import PostCard from '@/components/PostCard';
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
      <Stack>
        <Heading mb="2">Posts</Heading>
        <Divider />
        <SimpleGrid columns={[1, 2, 3]} spacing="6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
