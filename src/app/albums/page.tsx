import { Box, Divider, Heading, SimpleGrid, Stack } from "@chakra-ui/react";

import { AlbumCard } from "@/components/AlbumCard";

import { Album } from "@/types";

async function fetchAlbums() {
  const res = await fetch("https://jsonplaceholder.typicode.com/alb¥ms");

  if (!res.ok) {
    throw new Error("Fetch failed.");
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
        <SimpleGrid columns={[1, 2, 3]} spacing="6">
          {albums.map((album) => (
            <AlbumCard album={album} key={album.id} />
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
