import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandbleText from "../components/ExpandbleText";
import usegameDetails from "../hooks/usegameDetails";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = usegameDetails(slug!);
  if (error) throw error;
  if (isLoading) return <Spinner />;
  if (!game) return <Text>No Data Available</Text>;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandbleText text={game.description_raw} />
    </>
  );
};

export default GameDetailsPage;
