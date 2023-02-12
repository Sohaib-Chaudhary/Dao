import {
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
    createIcon,
    IconProps,
    useColorModeValue,
    AspectRatio,
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
                            Web 3.0
                        </Text>
                        <br />

                    </Heading>
                    <Text color={'gray.500'}>
                        Certified Web 3.0 and Metaverse Developer. A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet.

                        This curriculum is intended for beginners who want to learn software development from the ground up. The first two quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.
                    </Text>
                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={{ base: 'column', sm: 'row' }}>

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
                        height={{base:300,lg:526}}
                        rounded={'2xl'}
                        boxShadow={'2xl'}
                        width={'full'}
                        overflow={'hidden'}>

<AspectRatio w={{ base: 380, md: 450, lg: 700 }}  ratio={1} rounded={'3xl'} overflow={'hidden'}>
                    <iframe src="https://www.youtube.com/embed/PwLzOxLe4zc" title="PIAIC Registrations Open Now in METAVERSE Course" />
                </AspectRatio>
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