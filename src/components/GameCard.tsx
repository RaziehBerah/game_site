import { Card, CardBody, Heading, HStack, Img } from "@chakra-ui/react";
import { Game } from "../entities";
import CardContainer from "./CardContainer";
import GameMetaScore from "./GameMetaScore";
import PlatformIcons from "./PlatformIcons";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <CardContainer>
      <Card>
        <Img src={game.background_image} />
        <CardBody>
          <HStack justifyContent={"space-between"}>
            <Heading fontSize={"xl"}>{game.name}</Heading>
            <GameMetaScore score={game.metacritic} />
          </HStack>

          <PlatformIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </CardBody>
      </Card>
    </CardContainer>
  );
};

export default GameCard;
