import { Card, CardBody, Heading, Img } from "@chakra-ui/react";
import { Game } from "../entities";
import CardContainer from "./CardContainer";
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
        </CardBody>
      </Card>
    </CardContainer>
  );
};

export default GameCard;
