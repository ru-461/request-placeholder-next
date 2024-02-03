import { Comment } from '@/types';
import { Card, HStack, Link, Spacer, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

export function CommentCard({ comment }: { comment: Comment }) {
  return (
    <Card
      _hover={{ boxShadow: 'lg' }}
      as="article"
      boxShadow="md"
      mb="2"
      p="5"
      rounded="lg"
    >
      <HStack>
        <Text>{comment.name}</Text>
        <Spacer />
        <Link
          _hover={{ color: '#10B981' }}
          as={NextLink}
          href={`/posts/${comment.postId}`}
        >
          <Text>Show post</Text>
        </Link>
      </HStack>
    </Card>
  );
}
