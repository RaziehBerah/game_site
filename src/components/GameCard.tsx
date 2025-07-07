import React from 'react'
import { Game } from '../entities'
import { Card, CardBody, Heading, Img, Text } from '@chakra-ui/react'
interface Props{
    game:Game
}
const GameCard = ({game}:Props) => {
  return (
    <Card overflow={"hidden"} borderRadius={"10px"}>
        <Img src={game.background_image} />
        <CardBody>
            <Heading fontSize={"xl"}>
{game.name}
            </Heading>

            
        </CardBody>
    </Card>
  )
}

export default GameCard