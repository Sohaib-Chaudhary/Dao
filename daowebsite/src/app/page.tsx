"use client"
import { ChakraProvider } from '@chakra-ui/react'

import NavBar from './navbar'



export default function Home() {
  return (
    <ChakraProvider>
      <NavBar />
    </ChakraProvider>
  )
}
