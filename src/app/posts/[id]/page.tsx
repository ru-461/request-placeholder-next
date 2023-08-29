import { Comment, Post, User } from '@/types';
import { Box, Heading, Link, Text, Stack } from '@/components/common';
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
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
  );

  if (!res.ok) {
    throw new Error('Fetch failed.');
  }

  const data = await res.json();

  return data as Comment[];
}

export default async function PostDetail({
  params,
}: {
  params: { id: number };
}) {
  // Fetch from API.
  const post = await fetchPost(params.id);
  const user = await fetchUser(params.id);
  const comments = await fetchComments(params.id);

  return (
    <Box>
      <Stack>
        <Box mb="10">
          <Link as={NextLink} href={`/users/${user.id}`}>
            {user.name}
          </Link>
          <Heading mb="2">{post.title}</Heading>
          <Text>{post.body}</Text>
        </Box>
        <Box>
          <Heading mb="2">Comments</Heading>
          {comments ? (
            comments.map((comment) => (
              <Text key={comment.id} mb="2">
                {comment.body}
              </Text>
            ))
          ) : (
            <Text>No comment yet.</Text>
          )}
        </Box>
      </Stack>
    </Box>
  );
}
