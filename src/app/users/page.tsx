import { Box, Divider, Heading, SimpleGrid, Stack } from '@chakra-ui/react';

import { UserCard } from '@/components/UserCard';

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
      <Stack>
        <Heading mb="2">Users</Heading>
        <Divider />
        <SimpleGrid columns={[1, 2, 3]} spacing="6">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
