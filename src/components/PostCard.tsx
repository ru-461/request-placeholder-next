import Link from 'next/link';

import { Card, LinkOverlay } from '@chakra-ui/react';

import { Post } from '@/types';

export function PostCard({ post }: { post: Post }) {
  return (
    <Card
      _hover={{ boxShadow: 'lg' }}
      as="article"
      boxShadow="md"
      p="2"
      rounded="lg"
    >
      <LinkOverlay as={Link} href={`/posts/${post.id}`}>
        {post.title}
      </LinkOverlay>
    </Card>
  );
}
