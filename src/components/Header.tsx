import Link from 'next/link';
import { Box, Text } from '.';

export default function Header() {
  return (
    <Box p="3" display="flex" fontSize="lg">
      <Text px="1">
        <Link href="/posts">Posts</Link>
      </Text>
      <Text px="1">
        <Link href="/comments">Comments</Link>
      </Text>
      <Text px="1">
        <Link href="/albums">Albums</Link>
      </Text>
      <Text px="1">
        <Link href="/photos">Photos</Link>
      </Text>
      <Text px="1">
        <Link href="/todos">Todos</Link>
      </Text>
      <Text px="1">
        <Link href="/users">Users</Link>
      </Text>
    </Box>
  );
}
