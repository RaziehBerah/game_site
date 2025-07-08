import { Heading } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
interface Props{
    term:string,
    children:ReactNode | ReactNode[]
}
const Definitions = ({term,children}:Props) => {
  return (
    <>
    <Heading as={'dt'} color={"gray.500"} fontSize={"xl"}>
        {term}
    </Heading>
    <dd>{children}</dd>
    </>
  )
}

export default Definitions