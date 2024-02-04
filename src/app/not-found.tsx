import Link from 'next/link';

import { Box, Button, Heading, VStack } from '@chakra-ui/react';

export default function NotFound() {
  return (
    <Box alignItems="center" display="flex" h="100vh" justifyContent="center">
      <VStack spacing="4">
        <Heading>404 Page Not Found.</Heading>
        <Button>
          <Link href="/">Go Back</Link>
        </Button>
      </VStack>
    </Box>
  );
}
