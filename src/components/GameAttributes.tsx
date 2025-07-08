import { GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../entities";
import Definitions from "./Definitions";
interface Props {
  game: Game;
}
const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid as={"dl"} columns={2}>
      <GridItem>
        <Definitions term="Platforms">
          {game.parent_platforms.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </Definitions>

        <Definitions term="Genres">
          {game.genres.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </Definitions>
      </GridItem>

      <GridItem>
        <Definitions term="Publishers">
          {game.publishers.map((p) => (
            <Text key={p.id}>{p.name}</Text>
          ))}
        </Definitions>

        <Definitions term="MetaScore">{game.metacritic}</Definitions>
      </GridItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
