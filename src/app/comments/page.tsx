import { Box, Heading, Stack } from '@/components';
import { Comment } from '@/types';

async function fetchComments(): Promise<Comment[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');

  if (!res.ok) {
    throw new Error('Fetch failed.');
  }

  const data = await res.json();

  return data as Comment[];
}

export default async function Comments() {
  // Fetch from API.
  const comments = await fetchComments();

  return (
    <Box justifyContent="center" display="flex">
      <Stack>
        <Heading mb="2">Comments</Heading>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>{comment.name}</li>
          ))}
        </ul>
      </Stack>
    </Box>
  );
}
