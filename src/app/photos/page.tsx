import { Box } from '@/components';
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
      <h1>Photos</h1>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>{photo.title}</li>
        ))}
      </ul>
    </Box>
  );
}
