import React, { Key } from 'react'
import usegames from '../hooks/usegames'
import { FaWindows,FaPlaystation,FaXbox ,FaLinux,FaAndroid ,FaGlobe    } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { HStack, Icon, IconProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { Platform } from '../entities';
interface Props{
    platforms:Platform[]
}
const PlatformIcons = ({platforms}:Props) => {
  
 
   const iconsMap:{[key:string]:IconType}={
pc:FaWindows,
playstation:FaPlaystation,
xbox:FaXbox,
mac:FaApple,
nintendo:SiNintendo,
linux:FaLinux,
android:FaAndroid,
ios:MdPhoneIphone,
web:FaGlobe
   }
  
  return (
   <HStack paddingY={"5px"}>
    {platforms.map(p=><Icon key={p.id} as={iconsMap[p.slug]}/>)}
   </HStack>
  )
}

export default PlatformIcons