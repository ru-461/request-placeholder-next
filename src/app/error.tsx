'use client';

import { useEffect } from 'react';
import { Box, Button, Heading } from '@/components';

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
      <Heading>Error.</Heading>
      <Button onClick={() => reset()}>Try again</Button>
    </Box>
  );
}
