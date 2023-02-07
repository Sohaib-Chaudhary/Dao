"use client"
import { ChakraProvider } from '@chakra-ui/react'

import NavBar from './navbar'
import Hero from './Hero'
import Statistics from './Statistics'

export default function Home() {
  return (
    <ChakraProvider>
      <NavBar />
      <Hero />
      <Statistics />
    </ChakraProvider>
  )
}
