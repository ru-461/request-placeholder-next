import { AlbumCard } from '@/components/AlbumCard';
import {
  Box,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  Text,
 List, ListItem , Link , LinkIcon, EmailIcon, PhoneIcon , Tabs, TabList, TabPanels, Tab, TabPanel } from '@/components/common';
import { PostCard } from '@/components/PostCard';
import { TodoCard } from '@/components/TodoCard';

import { Post, User, Album, Todo } from '@/types';

async function fetchUser(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) {
    throw new Error('Fetch failed.');
  }

  const data = await res.json();

  return data as User;
}

async function fetchPosts(id: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
  );

  if (!res.ok) {
    throw new Error('Fetch failed.');
  }

  const data = await res.json();

  return data as Post[];
}

async function fetchAlbums(id: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${id}`,
  );

  if (!res.ok) {
    throw new Error('Fetch failed.');
  }

  const data = await res.json();

  return data as Album[];
}

async function fetchTodos(id: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${id}`,
  );

  if (!res.ok) {
    throw new Error('Fetch failed.');
  }

  const data = await res.json();

  return data as Todo[];
}

export default async function UserDetail({
  params,
}: {
  params: { id: number };
}) {
  // Fetch from API.
  const user = await fetchUser(params.id);
  const posts = await fetchPosts(params.id);
  const albums = await fetchAlbums(params.id);
  const todos = await fetchTodos(params.id);

  return (
    <Box>
      <Stack>
        <Heading mb="2">{user.name}</Heading>
        <HStack mb="2" spacing="4">
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
        <Tabs mt="4">
          <TabList>
            <Tab>Posts</Tab>
            <Tab>Albums</Tab>
            <Tab>Todos</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {posts ? (
                <SimpleGrid columns={[1, 2, 3]} spacing="6">
                  {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </SimpleGrid>
              ) : (
                <Text>No posts yet</Text>
              )}
            </TabPanel>
            <TabPanel>
              {albums ? (
                <SimpleGrid columns={[1, 2, 3]} spacing="6">
                  {albums.map((album) => (
                    <AlbumCard album={album} key={album.id} />
                  ))}
                </SimpleGrid>
              ) : (
                <Text>No albums yet</Text>
              )}
            </TabPanel>
            <TabPanel>
              {todos ? (
                <Stack>
                  {todos.map((todo) => (
                    <TodoCard key={todo.id} todo={todo} />
                  ))}
                </Stack>
              ) : (
                <Text>No todos yet</Text>
              )}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Box>
  );
}
