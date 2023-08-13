import { AlbumCard } from '@/components/AlbumCard';
import { Box, Divider, Heading, Stack } from '@/components/common';
import { Album } from '@/types';

async function fetchAlbums() {
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
      <Stack>
        <Heading mb="2">Albums</Heading>
        <Divider />
        {albums.map((album) => (
          <AlbumCard album={album} key={album.id} />
        ))}
      </Stack>
    </Box>
  );
}
