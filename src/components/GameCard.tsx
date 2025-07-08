import { Card, CardBody, Heading, HStack, Img } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Game } from "../entities";
import CardContainer from "./CardContainer";
import Emojies from "./Emojies";
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
            <Link to={`/games/${game.slug}`}>
              <Heading fontSize={"xl"}>{game.name}</Heading>
            </Link>

            <GameMetaScore score={game.metacritic} />
          </HStack>
          <HStack justifyContent={"space-between"} marginY={"2px"}>
            <PlatformIcons
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <Emojies rating={game.rating_top} />
          </HStack>
        </CardBody>
      </Card>
    </CardContainer>
  );
};

export default GameCard;
