import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Heading,Text, Stack, Link,
  } from '@chakra-ui/react'

  import React from 'react'
  
  function Quarter1() {
    return (
      <>
      <Accordion defaultIndex={[0]} allowMultiple px={24} bg={'gray.100'}>
  <AccordionItem >
    <h2>
      <AccordionButton >
        <Box as="span" flex='1' textAlign='left'>
        <Heading size={'md'} color={'blue'}> Quarter 1</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        <Stack direction={'column'} spacing={5}>
        <Heading fontSize={'md'}>
    Course Description:
    </Heading>
    <Text fontSize={'sm'}>
    We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.
    </Text>
    <Heading fontSize={'lg'}>Course Outline:</Heading>
    <Heading fontSize={'md'} color={'red.400'} >
    HTML and CSS (Homework)
    </Heading>
    <Link href='https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6' isExternal>Learn HTML by Hira Khan (Watch Recorded Videos)</Link>
    <Link href='https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob' isExternal>Learn CSS Intro by Hira Khan (Watch Recorded Videos)</Link>
    <Heading fontSize={'md'} color={'red.400'} >
    Web 3.0 and Metaverse Theory
    </Heading>
    <Link href='https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit' isExternal>Introduction to Panaverse DAO</Link>
    <Link href='https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing' isExternal>Web 3.0 User Guide</Link>
    <Link href='https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing' isExternal>Virtual and Augmented Metaverse User Guide</Link>
    <Heading fontSize={'md'} color={'red.400'} >
    Fundamentals of JavaScript (ECMAScript 2022 Language Specification)
    </Heading>
    <Link href='https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo' isExternal>Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)</Link>
    <Link href='https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4' isExternal>Chapters 2-6, 13 of JavaScript from Beginner to Professional: Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages</Link>
    <Link href='https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional' isExternal>JavaScript Book Code</Link>
    <Link href='https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md' isExternal>Getting Started Exercises with JavaScript and Node.js</Link>

        </Stack>
    
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <Heading size={'md'} color={'blue'}> Quarter 2</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <Heading size={'md'} color={'blue'}> Quarter 3</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' >
            <Heading size={'md'} color={'blue'}> Quarter 4</Heading>
       
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
      </>
    )
  }
  
  export default Quarter1