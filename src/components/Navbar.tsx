import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SearchBox from "./SearchBox";
import SwitchMode from "./SwitchMode";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack padding={"10px"}>
      <Link to={"/"}>
       <Image src={logo} boxSize={"60px"} />
      </Link>
     
      <SearchBox />
      <SwitchMode />
    </HStack>
  );
};

export default Navbar;
