import { HStack, Icon } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { FaApple } from "react-icons/fa";
import {
  FaAndroid,
  FaGlobe,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { Platform } from "../entities";
interface Props {
  platforms: Platform[];
}
const PlatformIcons = ({ platforms }: Props) => {
  const iconsMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    nintendo: SiNintendo,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: FaGlobe,
  };

  return (
    <HStack paddingY={"5px"}>
      {platforms.map((p) => (
        <Icon
          key={p.id}
          as={iconsMap[p.slug] as unknown as React.ElementType}
        />
      ))}
    </HStack>
  );
};

export default PlatformIcons;
