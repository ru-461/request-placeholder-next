import { User } from '@/types';
import { Card, LinkOverlay } from '@chakra-ui/react';
import Link from 'next/link';

export function UserCard({ user }: { user: User }) {
  return (
    <Card
      _hover={{ boxShadow: 'lg' }}
      as="article"
      boxShadow="md"
      p="4"
      rounded="lg"
    >
      <LinkOverlay as={Link} href={`/users/${user.id}`}>
        {user.name}
      </LinkOverlay>
    </Card>
  );
}
