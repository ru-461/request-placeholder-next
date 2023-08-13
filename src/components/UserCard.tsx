import { User } from '@/types';
import { Card, LinkOverlay } from '@/components/common';
import Link from 'next/link';

export function UserCard({ user }: { user: User }) {
  return (
    <Card
      _hover={{ boxShadow: 'lg' }}
      as="article"
      boxShadow="md"
      p="2"
      rounded="lg"
    >
      <LinkOverlay as={Link} href={`/users/${user.id}}`}>
        {user.name}
      </LinkOverlay>
    </Card>
  );
}
