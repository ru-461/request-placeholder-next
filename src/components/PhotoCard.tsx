import { Card } from '@/components/common';

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
      {photo.title}
    </Card>
  );
}
