import { Box, Heading, Stack } from '@/components/common';
import { Todo } from '@/types';

async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');

  if (!res.ok) {
    throw new Error('Fetch failed.');
  }

  const data = await res.json();

  return data as Todo[];
}

export default async function Todos() {
  // Fetch from API.
  const todos = await fetchTodos();

  return (
    <Box>
      <Stack>
        <Heading mb="2">Todos</Heading>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </Stack>
    </Box>
  );
}
