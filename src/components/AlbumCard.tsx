import { Album } from '@/types';
import { Card, LinkOverlay } from '@/components/common';
import Link from 'next/link';

export function AlbumCard({ album }: { album: Album }) {
  return (
    <Card
      _hover={{ boxShadow: 'lg' }}
      as="article"
      boxShadow="md"
      p="2"
      rounded="lg"
    >
      <LinkOverlay as={Link} href={`/albums/${album.id}}`}>
        {album.title}
      </LinkOverlay>
    </Card>
  );
}
