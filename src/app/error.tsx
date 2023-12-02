'use client';

import { Box, Button, Heading, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Box alignItems="center" display="flex" h="100vh" justifyContent="center">
      <VStack spacing="4">
        <Heading fontSize="6xl">Error</Heading>
        <Button onClick={() => reset()}>Retry</Button>
      </VStack>
    </Box>
  );
}
