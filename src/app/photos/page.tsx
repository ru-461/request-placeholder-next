

import { Box, Divider, Heading, SimpleGrid, Stack } from '@/components/common';
import { PhotoCard } from '@/components/PhotoCard';

import { Photo } from '@/types';


async function fetchPhotos(): Promise<Photo[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');

  if (!res.ok) {
    throw new Error('Fetch failed.');
  }

  const data = await res.json();

  return data as Photo[];
}

export default async function Photos() {
  // Fetch from API.
  const photos = await fetchPhotos();

  return (
    <Box>
      <Stack>
        <Heading mb="2">Photos</Heading>
        <Divider />
        <SimpleGrid columns={[1, 2, 3]} spacing="6">
          {photos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
