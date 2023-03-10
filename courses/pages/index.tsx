"use client"
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { Inter } from '@next/font/google'
import Hero from './Hero'
import Quaters from './Quaters'
import NabBar from './navbar1'
import Footer from './Footer1'
import Quarter1 from './Quarter1'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <ChakraProvider>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NabBar />
        <Hero />
        <Quaters />
        <Quarter1 />
        <Footer />
      </ChakraProvider>
    </>
  )
}
