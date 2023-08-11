import { Post } from '@/types';
import {
  Box,
  Center,
  Divider,
  Heading,
  Stack,
  Text,
  VStack,
} from '@/components';

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

  return (
    <Box>
      <VStack>
        <Heading>{post.title}</Heading>
        <Divider />
        <Text>{post.body}</Text>
      </VStack>
    </Box>
  );
}
