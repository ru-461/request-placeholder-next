import { Card } from '@chakra-ui/react';

import { Album } from '@/types';

export function AlbumCard({ album }: { album: Album }) {
  return (
    <Card
      _hover={{ boxShadow: 'lg' }}
      as="article"
      boxShadow="md"
      p="2"
      rounded="lg"
    >
      {album.title}
    </Card>
  );
}
