import { Box } from '@/components';
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
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </Box>
  );
}
