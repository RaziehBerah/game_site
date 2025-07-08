import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandbleText from "../components/ExpandbleText";
import GameAttributes from "../components/GameAttributes";
import GameScreenShots from "../components/GameScreenShots";
import GameTrailer from "../components/GameTrailer";
import usegameDetails from "../hooks/usegameDetails";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = usegameDetails(slug!);
  if (error) throw error;
  if (isLoading) return <Spinner />;
  if (!game) return <Text>No Data Available</Text>;
  return (
    <SimpleGrid columns={2}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandbleText text={game.description_raw} />
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer id={game.id} />
        <GameScreenShots id={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailsPage;
