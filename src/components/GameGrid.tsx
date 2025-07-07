import { SimpleGrid, Text } from "@chakra-ui/react";
import usegames from "../hooks/usegames";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";

const GameGrid = () => {
  const { data: games, error, isLoading } = usegames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error.message}</Text>;
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={"10px"}>
      {isLoading &&
        skeletons.map((skeleton) => <GameSkeleton key={skeleton} />)}
      {games?.results.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
