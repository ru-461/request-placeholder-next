import { Text, Box, Link, Center } from '@/components/common';

const fullYear = new Date().getFullYear();

export function Footer() {
  return (
    <Box as="footer" mb="5" mt="10">
      <Center>
        <Text fontSize="sm">
          {'Copyright © '}
          <Link href="https://github.com/ru-461" isExternal>
            ru_461
          </Link>{' '}
          {fullYear}
          {'.'}
        </Text>
      </Center>
    </Box>
  );
}
