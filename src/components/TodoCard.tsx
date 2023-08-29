import Link from 'next/link';

import { Card, LinkOverlay } from '@/components/common';

import { Todo } from '@/types';

export function TodoCard({ todo }: { todo: Todo }) {
  return (
    <Card
      _hover={{ boxShadow: 'lg' }}
      as="article"
      boxShadow="md"
      p="2"
      rounded="lg"
    >
      <LinkOverlay as={Link} href={`/todos/${todo.id}`}>
        {todo.title}
      </LinkOverlay>
    </Card>
  );
}
