import { Post } from '@/types';
import { Card, LinkOverlay } from '.';
import Link from 'next/link';

export default function PostCard({ post }: { post: Post }) {
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
