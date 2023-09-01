'use client';

import { useState } from 'react';

import { Checkbox } from '@/components/common';
import { Card } from '@/components/common';

import { Todo } from '@/types';

export function TodoCard({ todo }: { todo: Todo }) {
  const [isChecked, setChecked] = useState(todo.completed);

  return (
    <Card
      _hover={{ boxShadow: 'lg' }}
      as="article"
      boxShadow="md"
      p="2"
      rounded="lg"
    >
      <Checkbox isChecked={isChecked} onChange={() => setChecked(!isChecked)}>
        {todo.title}
      </Checkbox>
    </Card>
  );
}
