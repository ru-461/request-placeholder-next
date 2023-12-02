import { Box, Spinner } from '@chakra-ui/react';

export default function Loading() {
  return (
    <Box alignItems="center" display="flex" h="100vh" justifyContent="center">
      <Spinner color="#10B981" size="xl" />
    </Box>
  );
}
