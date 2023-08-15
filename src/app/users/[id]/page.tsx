import { User } from '@/types';
import { Box, HStack, Heading, VStack } from '@/components/common';
import { List, ListItem } from '@/components/common';
import { Link } from '@/components/common';
import { LinkIcon, EmailIcon, PhoneIcon } from '@/components/common';

async function fetchUser(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) {
    throw new Error('Fetch failed.');
  }

  const data = await res.json();

  return data as User;
}

export default async function UserDetail({
  params,
}: {
  params: { id: number };
}) {
  // Fetch from API.
  const user = await fetchUser(params.id);
  return (
    <Box>
      <VStack>
        <Heading mb="2">{user.name}</Heading>
        <HStack mb="12" spacing="4">
          <Link
            _hover={{ color: 'gray.800' }}
            color="gray.400"
            href={`http://${user.website}`}
            isExternal
          >
            <LinkIcon />
          </Link>
          <Link
            _hover={{ color: 'gray.800' }}
            color="gray.400"
            href={`http://${user.email}`}
            isExternal
          >
            <EmailIcon />
          </Link>
          <Link
            _hover={{ color: 'gray.800' }}
            color="gray.400"
            href={`http://${user.phone}`}
            isExternal
          >
            <PhoneIcon />
          </Link>
        </HStack>
        <List spacing="4">
          <ListItem>
            <strong>Address</strong> {user.address.suite} {user.address.city}{' '}
            {user.address.zipcode}
          </ListItem>
          <ListItem>
            <strong>Company</strong> {user.company.name}{' '}
            {user.company.catchPhrase} {user.company.bs}
          </ListItem>
        </List>
      </VStack>
    </Box>
  );
}
