import { Card, CardBody, Heading, Img } from "@chakra-ui/react";
import { Game } from "../entities";
import CardContainer from "./CardContainer";
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
          <Heading fontSize={"xl"}>{game.name}</Heading>
          <PlatformIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </CardBody>
      </Card>
    </CardContainer>
  );
};

export default GameCard;
