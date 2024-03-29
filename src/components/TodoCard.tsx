import { Card, Checkbox } from '@chakra-ui/react';

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
      <Checkbox isChecked={todo.completed}>{todo.title}</Checkbox>
    </Card>
  );
}
