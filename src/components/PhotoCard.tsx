import Link from 'next/link';

import { Card, LinkOverlay } from '@/components/common';

import { Photo } from '@/types';

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
