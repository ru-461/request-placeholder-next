import { CommentCard } from '@/components/CommentCard';
import { Box, Divider, Heading, Stack } from '@/components/common';

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
    <Box>
      <Stack>
        <Heading mb="2">Comments</Heading>
        <Divider />
        {comments.map((comment) => (
          <CommentCard comment={comment} key={comment.id} />
        ))}
      </Stack>
    </Box>
  );
}
