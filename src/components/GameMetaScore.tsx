import { Badge } from '@chakra-ui/react'
import React from 'react'
interface Props{
    score:number
}
const GameMetaScore = ({score}:Props) => {
    const color= score>75 ? "green" : score>60 ? "yellow" : ""
  return (
   <Badge colorScheme={color} paddingY={"0.5"} paddingX={"2"} borderRadius={"5px"}>{score}</Badge>
  )
}

export default GameMetaScore