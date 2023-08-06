import Link from 'next/link';
import { Box } from '.';

export default function Header() {
  return (
    <Box>
      <Link href="/posts">Posts</Link>
      <Link href="/comments">Comments</Link>
      <Link href="/albums">Albums</Link>
      <Link href="/photos">Photos</Link>
      <Link href="/todos">Todos</Link>
      <Link href="/users">Users</Link>
    </Box>
  );
}
