
import {

    AiFillPlayCircle
} from 'react-icons/ai';
import {
    Code,
    VStack,
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,

    IconProps,
    useColorModeValue,

} from '@chakra-ui/react';


export default function Hero() {
    return (
        <Container maxW={'7xl'}>
            <Stack
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
                direction={{ base: 'column', md: 'row' }}>
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}

                            _after={{
                                content: "''",
                                width: 'full',
                                height: '30%',
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'red.400',
                                zIndex: -1,
                            }}>

                            Web 3 & Metaverse
                        </Text>
                        <br />
                        <Text as={'span'} color={'red.400'}>
                            Launch Your Career
                        </Text>
                    </Heading>
                    <Text color={'gray.500'}>
                        Certified Web 3.0 and Metaverse Developer. A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet.
                    </Text>
                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={{ base: 'column', sm: 'row' }}>
                        <Button
                            rounded={'full'}
                            size={'lg'}
                            fontWeight={'normal'}
                            px={6}
                            colorScheme={'red'}
                            bg={'red.400'}
                            _hover={{ bg: 'red.500' }}
                            as={'a'}
                            href={'#'}>
                            Get started
                        </Button>
                        <Button
                            as={'a'}
                            href={'https://www.youtube.com/watch?v=fKhY3mu8hx4'}
                            rounded={'full'}
                            size={'lg'}
                            fontWeight={'normal'}
                            px={6}
                            leftIcon={<    AiFillPlayCircle
                                color={'gray.300'} />}
                        >
                            How It Works
                        </Button>
                    </Stack>
                </Stack>
                <Flex
                    flex={1}
                    justify={'center'}
                    align={'center'}
                    position={'relative'}
                    w={'full'}>
                    <Blob
                        w={'110%'}
                        h={'150%'}
                        position={'absolute'}
                        top={'-20%'}
                        left={0}
                        zIndex={-1}
                        color={useColorModeValue('red.50', 'red.400')}
                    />
                    <Box

                        position={'relative'}
                        height={'380px'}
                        rounded={'2xl'}
                        boxShadow={'2xl'}
                        width={'full'}
                        overflow={'hidden'}>
                        <Stack direction="column" bg={"black"} p={"10"}>
                            <Code color={"red"} colorScheme={"black"}>
                                <Code children="<" colorScheme="black" color={"blue"} />
                                header
                                <Code children=">" colorScheme="black" color={"blue"} />
                            </Code>
                            <Code color={"white"} colorScheme={"black"}>
                                <Code color={"red"} colorScheme={"black"} ml={"10"}>
                                    <Code children="<" colorScheme="black" color={"blue"} />
                                    h1
                                    <Code children=">" colorScheme="black" color={"blue"} />
                                </Code>
                                Start Learning
                                <Code color={"red"} colorScheme={"black"}>
                                    <Code children="<" colorScheme="black" color={"blue"} />
                                    /h1
                                    <Code children=">" colorScheme="black" color={"blue"} />
                                </Code>
                            </Code>

                            <Code color={"white"} colorScheme={"black"}>
                                <Code color={"red"} colorScheme={"black"} ml={"10"}>
                                    <Code children="<" colorScheme="black" color={"blue"} />
                                    span
                                    <Code
                                        colorScheme={"black"}
                                        children={"className"}
                                        color={"purple"}
                                    />
                                    <Code children='= "' colorScheme="black" color={"blue"} />
                                    <Code
                                        children="animated"
                                        colorScheme="black"
                                        color={"green"}
                                    />
                                    <Code children='" >' colorScheme="black" color={"blue"} />
                                </Code>
                            </Code>
                            <VStack>
                                <Code
                                    colorScheme={"black"}
                                    color={"grey"}
                                    children=" <!-- React.js -->"
                                />
                                <Code
                                    children=" <!-- Next.js -->"
                                    colorScheme={"black"}
                                    color={"grey"}
                                />
                                <Code colorScheme={"black"} color={"white"}>
                                    Web Development
                                </Code>
                                <Code
                                    children=" <!-- Blockchain -->"
                                    colorScheme={"black"}
                                    color={"grey"}
                                />
                                <Code
                                    children=" <!-- Solidity -->"
                                    colorScheme={"black"}
                                    color={"grey"}
                                />
                            </VStack>

                            <Code color={"red"} colorScheme={"black"}>
                                <Code
                                    children="<"
                                    colorScheme="black"
                                    color={"blue"}
                                    ml={"10"}
                                />
                                /span
                                <Code children=">" colorScheme="black" color={"blue"} />
                            </Code>
                            <Code color={"white"} colorScheme={"black"}>
                                <Code color={"red"} colorScheme={"black"}>
                                    <Code
                                        children="<"
                                        colorScheme="black"
                                        color={"blue"}
                                        ml={"10"}
                                    />
                                    h1
                                    <Code children=">" colorScheme="black" color={"blue"} />
                                </Code>
                                Right Now
                                <Code color={"red"} colorScheme={"black"}>
                                    <Code children="<" colorScheme="black" color={"blue"} />
                                    /h1
                                    <Code children=">" colorScheme="black" color={"blue"} />
                                </Code>
                            </Code>
                            <Code color={"red"} colorScheme={"black"}>
                                <Code children="<" colorScheme="black" color={"blue"} />
                                header
                                <Code children=">" colorScheme="black" color={"blue"} />
                            </Code>
                        </Stack>

                    </Box>
                </Flex>
            </Stack>
        </Container>
    );
}



export const Blob = (props: IconProps) => {
    return (
        <Icon
            width={'100%'}
            viewBox="0 0 578 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
                fill="currentColor"
            />
        </Icon>
    );
};