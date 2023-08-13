import { Photo } from '@/types';
import { Card, LinkOverlay } from '@/components/common';
import Link from 'next/link';

export function PhotoCard({ photo }: { photo: Photo }) {
  return (
    <Card
      _hover={{ boxShadow: 'lg' }}
      as="article"
      boxShadow="md"
      p="2"
      rounded="lg"
    >
      <LinkOverlay as={Link} href={`/photos/${photo.id}`}>
        {photo.title}
      </LinkOverlay>
    </Card>
  );
}
