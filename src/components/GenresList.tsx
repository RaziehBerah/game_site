import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  Spinner,
  Text,
} from "@chakra-ui/react";
import usegenres from "../hooks/usegenres";
import usegameStoreQuery from "../store";

const GenresList = () => {
  const { data: genres, error, isLoading } = usegenres();
  const setGenreId = usegameStoreQuery((s) => s.setgenreId);
  const selectedId = usegameStoreQuery((s) => s.gameQuery.genreId);

  if (error) return <Text>{error.message}</Text>;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading>Genres</Heading>
      <List>
        {genres?.results.map((genre) => (
          <HStack key={genre.id} paddingY={"2px"}>
            <Image
              boxSize={"32px"}
              src={genre.image_background}
              objectFit={"cover"}
              borderRadius={"5px"}
            />
            <Button
              variant={"link"}
              fontWeight={genre.id == selectedId ? "bold" : "normal"}
              whiteSpace={"normal"}
              textAlign={"left"}
              onClick={() => setGenreId(genre.id)}
            >
              {genre.name}
            </Button>
          </HStack>
        ))}
      </List>
    </>
  );
};

export default GenresList;
