import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import usegames from "../hooks/usegames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { data: games, error, isLoading } = usegames();
  if (error) return <Text>{error.message}</Text>;
  if (isLoading) return <Spinner />;
  if (!games) return <Text>No Data Availabe</Text>;
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={"10px"}>
      {games.results.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
