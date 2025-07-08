import React from 'react'
import usegenres from '../hooks/usegenres'
import usegameStoreQuery from '../store'
import useplatforms from '../hooks/useplatforms'
import { Heading } from '@chakra-ui/react'

const DynamicHeading = () => {
    const{data:genres}=usegenres()
    const selectedGenreId=usegameStoreQuery(s=>s.gameQuery.genreId)
    const selectedGenre = genres?.results.find(g=>g.id==selectedGenreId)

    const{data:platforms}=useplatforms()
    const selectedPlatformId=usegameStoreQuery(s=>s.gameQuery.platformId)
    const selectedPlatform=platforms?.results.find((platform)=>platform.id==selectedPlatformId)

    const dynamicHeading =`${selectedGenre? selectedGenre.name : ""} ${selectedPlatform ? selectedPlatform.name : ""} Games`
  return (
    <Heading>
        {dynamicHeading}
    </Heading>
  )
}

export default DynamicHeading