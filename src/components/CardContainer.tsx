import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
interface Props{
    children:ReactNode | ReactNode[]
}
const CardContainer = ({children}:Props) => {
  return (
    <Box overflow={"hidden"} borderRadius={"10px"}>
        {children}
    </Box>
  )
}

export default CardContainer