import { Box } from '@/components';
import { User } from '@/types';

async function fetchUsers(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/Users');

  if (!res.ok) {
    throw new Error('Fetch failed.');
  }

  const data = await res.json();

  return data as User[];
}

export default async function Users() {
  // Fetch from API.
  const users = await fetchUsers();

  return (
    <Box>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </Box>
  );
}
