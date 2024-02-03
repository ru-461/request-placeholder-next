import { Box, HStack, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const ITEMS = [
  {
    href: '/posts',
    title: 'Posts',
  },
  {
    href: '/comments',
    title: 'Comments',
  },
  {
    href: '/albums',
    title: 'Albums',
  },
  {
    href: '/photos',
    title: 'Photos',
  },
  {
    href: '/todos',
    title: 'Todos',
  },
  {
    href: '/users',
    title: 'Users',
  },
];

export function Header() {
  return (
    <Box as="header" mb="10" mt="5">
      <HStack
        bg="white"
        color="gray.600"
        h="50"
        justify="center"
        minH="50px"
        spacing="6"
        w="full"
      >
        {ITEMS.map((item) => (
          <Link
            _hover={{ color: 'black' }}
            as={NextLink}
            fontSize="lg"
            fontWeight="500"
            href={item.href}
            key={item.href}
          >
            {item.title}
          </Link>
        ))}
      </HStack>
    </Box>
  );
}
