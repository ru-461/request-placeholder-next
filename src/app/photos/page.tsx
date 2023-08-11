import { Box, Heading, Stack } from '@/components/common';
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
        <ul>
          {photos.map((photo) => (
            <li key={photo.id}>{photo.title}</li>
          ))}
        </ul>
      </Stack>
    </Box>
  );
}
