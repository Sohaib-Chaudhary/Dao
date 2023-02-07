"use client"
import { ChakraProvider } from '@chakra-ui/react'

import Navbar from './navbar'



export default function Home() {
  return (
    <ChakraProvider>
      <Navbar />
    </ChakraProvider>
  )
}
