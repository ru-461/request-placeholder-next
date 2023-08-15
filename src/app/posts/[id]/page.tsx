import { Post, User } from '@/types';
import { Box, Divider, Heading, Link, Text, VStack } from '@/components/common';
import NextLink from 'next/link';

async function fetchPost(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    throw new Error('Fetch failed.');
  }

  const data = await res.json();

  return data as Post;
}

async function fetchUser(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) {
    throw new Error('Fetch failed.');
  }

  const data = await res.json();

  return data as User;
}

async function fetchComments(id: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${id}`,
  );

  if (!res.ok) {
    throw new Error('Fetch failed.');
  }

  const data = await res.json();

  return data as User;
}

export default async function PostDetail({
  params,
}: {
  params: { id: number };
}) {
  // Fetch from API.
  const post = await fetchPost(params.id);
  const user = await fetchUser(params.id);

  return (
    <Box>
      <VStack>
        <Link as={NextLink} href={`/users/${user.id}`}>
          {user.name}
        </Link>
        <Heading mb="2">{post.title}</Heading>
        <Divider />
        <Text>{post.body}</Text>
        <Divider />
      </VStack>
    </Box>
  );
}
