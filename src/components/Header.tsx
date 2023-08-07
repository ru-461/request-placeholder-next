import Link from 'next/link';
import { HStack, Text } from '.';

export default function Header() {
  return (
    <HStack spacing="2">
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
    </HStack>
  );
}
