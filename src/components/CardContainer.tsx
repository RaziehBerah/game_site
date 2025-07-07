import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
interface Props{
    children:ReactNode | ReactNode[]
}
const CardContainer = ({children}:Props) => {
  return (
    <Box overflow={"hidden"} borderRadius={"10px"}   
            _hover={{
            transform:"scale(1.03)",
            }}
            transition="transform 0.5s ease-in-out"
            >
        {children}
    </Box>
  )
}

export default CardContainer