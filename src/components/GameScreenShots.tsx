import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import usegameScreenShots from "../hooks/usegameScreenShots";
interface Props {
  id: number;
}
const GameScreenShots = ({ id }: Props) => {
  const { data: screenshots, error, isLoading } = usegameScreenShots(id);
  if (error) throw error;
  if (isLoading) return <Spinner />;
  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={"5px"}>
      {screenshots?.results.map((s) => (
        <Image key={s.id} src={s.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
