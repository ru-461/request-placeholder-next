import { Box } from '@/components';
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
      <h1>Comments</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.name}</li>
        ))}
      </ul>
    </Box>
  );
}
