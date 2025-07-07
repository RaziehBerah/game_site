import { Image, ImageProps } from "@chakra-ui/react";
import bulls from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumb from "../assets/thumbs-up.webp";
interface Props {
  rating: number;
}
const Emojies = ({ rating }: Props) => {
  const emojiesMap: { [key: number]: ImageProps } = {
    3: { src: meh, boxSize: "32px", alt: "meh" },
    4: { src: thumb, boxSize: "28px", alt: "thumb" },
    5: { src: bulls, boxSize: "32px", alt: "bulls-eyes" },
  };
  return <Image {...emojiesMap[rating]} />;
};

export default Emojies;
