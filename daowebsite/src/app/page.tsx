"use client"
import { ChakraProvider } from '@chakra-ui/react'

import NavBar from './navbar'
import Hero from './Hero'


export default function Home() {
  return (
    <ChakraProvider>
      <NavBar />
      <Hero/>
    </ChakraProvider>
  )
}
