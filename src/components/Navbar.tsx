import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SearchBox from "./SearchBox";
import SwitchMode from "./SwitchMode";

const Navbar = () => {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} boxSize={"60px"} />
      <SearchBox />
      <SwitchMode />
    </HStack>
  );
};

export default Navbar;
