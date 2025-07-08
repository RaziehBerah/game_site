import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandbleText from "../components/ExpandbleText";
import usegameDetails from "../hooks/usegameDetails";
import GameAttributes from "../components/GameAttributes";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = usegameDetails(slug!);
  if (error) throw error;
  if (isLoading) return <Spinner />;
  if (!game) return <Text>No Data Available</Text>;
  return (
    <SimpleGrid >
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandbleText text={game.description_raw} />
        <GameAttributes game={game}/>
      </GridItem>
      <GridItem>
        
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailsPage;
