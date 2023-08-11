import NextLink from 'next/link';
import { Box, HStack, Link } from '.';

export default function Header() {
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
        <Link
          _hover={{ color: 'black' }}
          as={NextLink}
          fontSize="lg"
          fontWeight="500"
          href="/posts"
        >
          Posts
        </Link>
        <Link
          _hover={{ color: 'black' }}
          as={NextLink}
          fontSize="lg"
          fontWeight="500"
          href="/comments"
        >
          Comments
        </Link>
        <Link
          _hover={{ color: 'black' }}
          as={NextLink}
          fontSize="lg"
          fontWeight="500"
          href="/albums"
        >
          Albums
        </Link>
        <Link
          _hover={{ color: 'black' }}
          as={NextLink}
          fontSize="lg"
          fontWeight="500"
          href="/photos"
        >
          Photos
        </Link>
        <Link
          _hover={{ color: 'black' }}
          as={NextLink}
          fontSize="lg"
          fontWeight="500"
          href="/todos"
        >
          Todos
        </Link>
        <Link
          _hover={{ color: 'black' }}
          as={NextLink}
          fontSize="lg"
          fontWeight="500"
          href="/users"
        >
          Users
        </Link>
      </HStack>
    </Box>
  );
}
