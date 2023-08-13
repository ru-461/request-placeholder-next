import { Comment } from '@/types';
import { Card, LinkOverlay } from '@/components/common';
import Link from 'next/link';

export function CommentCard({ comment }: { comment: Comment }) {
  return (
    <Card
      _hover={{ boxShadow: 'lg' }}
      as="article"
      boxShadow="md"
      p="2"
      rounded="lg"
    >
      <LinkOverlay as={Link} href={`/comment/${comment.id}}`}>
        {comment.name}
      </LinkOverlay>
    </Card>
  );
}
