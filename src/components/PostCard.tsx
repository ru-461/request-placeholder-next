import { Post } from '@/types';
import { Card } from '.';

export default function PostCard({ post }: { post: Post }) {
  return (
    <Card
      _hover={{ boxShadow: 'lg' }}
      as="article"
      boxShadow="md"
      p="2"
      rounded="lg"
    >
      {post.title}
    </Card>
  );
}
