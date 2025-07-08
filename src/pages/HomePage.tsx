import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import DynamicHeading from "../components/DynamicHeading";
import GameGrid from "../components/GameGrid";
import GenresList from "../components/GenresList";
import PlatformList from "../components/PlatformList";
import SortOrderList from "../components/SortOrderList";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{ base: ` "main"`, lg: ` "aside main"` }}
      gridTemplateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <Show above="lg">
        <GridItem area={"aside"}>
          <GenresList />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <DynamicHeading />
        <HStack marginBottom={"5px"}>
          <PlatformList />
          <SortOrderList />
        </HStack>

        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
