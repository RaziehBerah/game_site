import React from 'react'
import usegenres from '../hooks/usegenres'
import { Button, Heading, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'

const GenresList = () => {
    const{data:genres,error,isLoading}=usegenres()
    if(error) return <Text>{error.message}</Text>
    if(isLoading) return <Spinner/>
   return (
    <>
   <Heading>Genres</Heading>
    <List>
{genres?.results.map(genre=><HStack paddingY={"2px"}>
    <Image boxSize={"32px"} src={genre.image_background} objectFit={"cover"} borderRadius={"5px"} />
    <Button variant={"link"} whiteSpace={"normal"} textAlign={"left"}>{genre.name}</Button>
</HStack>)}
    </List>
     </>
  )
}

export default GenresList