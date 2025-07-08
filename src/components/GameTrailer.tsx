import useGameTrailers from "../hooks/useGameTrailers";

interface Props {
  id: number;
}

const GameTrailer = ({ id }: Props) => {
  const { data } = useGameTrailers(id);
  const first = data?.results[0];
  return <video src={first?.data["480"]} controls poster={first?.preview} />;
};

export default GameTrailer;
