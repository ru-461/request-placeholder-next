import { Flex, Spinner } from '@/components';

export default function Loading() {
  return (
    <Flex justify="center" align="center" height="100vh">
      <Spinner size="xl" />
    </Flex>
  );
}
