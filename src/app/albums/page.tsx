import { Box } from '@/components';
import { Album } from '@/types';

async function fetchAlbums(): Promise<Album[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums');

  if (!res.ok) {
    throw new Error('Fetch failed.');
  }

  const data = await res.json();

  return data as Album[];
}

export default async function Albums() {
  // Fetch from API.
  const albums = await fetchAlbums();

  return (
    <Box>
      <h1>Albums</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </Box>
  );
}
