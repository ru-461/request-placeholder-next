import { Box, Button, Heading, VStack } from '@chakra-ui/react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Box alignItems="center" display="flex" h="100vh" justifyContent="center">
      <VStack spacing="4">
        <Heading>404 Not Found Page.</Heading>
        <Button>
          <Link href="/">Go Back</Link>
        </Button>
      </VStack>
    </Box>
  );
}
