"use client"
import { ChakraProvider } from '@chakra-ui/react'
import { BlogAuthor } from './post/Blog'
import NavBar from './navbar'
import Hero from './Hero'
import Statistics from './Statistics'
import Testimonials from './Testimonials'
import Plan from './ourPlan'
import Footer from './Footer'

export default function Home() {
  return (
    <ChakraProvider>
      <NavBar />
      <Hero />
      <Plan />
      <Statistics />
      <Testimonials />
      <Footer />
      <BlogAuthor date={new Date('2021-04-06T19:01:27Z')} name={'Sohaib'} />
    </ChakraProvider>
  )
}
