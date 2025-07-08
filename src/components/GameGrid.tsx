import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import usegames from "../hooks/usegames";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";

const GameGrid = () => {
  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = usegames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  const dataAmount =
    games?.pages.reduce((acc, page) => page.results.length + acc, 0) || 0;
  if (error) return <Text>{error.message}</Text>;
  if (!isLoading && dataAmount == 0) return <Text>No Game Was Found</Text>;

  return (
    <InfiniteScroll
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={<Spinner />}
      dataLength={dataAmount}
    >
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={"10px"}>
        {isLoading && dataAmount == 0
          ? skeletons.map((skeleton) => <GameSkeleton key={skeleton} />)
          : games?.pages.flatMap((page) =>
              page.results.map((game) => <GameCard key={game.id} game={game} />)
            )}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
