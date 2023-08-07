import { Box, Flex, Spinner } from '@/components';

export default function Loading() {
  return (
    <Box>
      <Flex justify="center" align="center" height="100vh">
        <Spinner size="xl" />
      </Flex>
    </Box>
  );
}
