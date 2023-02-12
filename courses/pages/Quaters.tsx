import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Container,
} from '@chakra-ui/react';

const IMAGETS =
    'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg';
const IMAGENext =
    'https://res.cloudinary.com/practicaldev/image/fetch/s--KkP4AuFt--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ql92zpsre2li58mpjpsa.png';

const IMAGESmartContract =
    'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_smart_contract.jpg';

const IMAGEVR =
    'https://www.emizentech.com/blog/wp-content/uploads/sites/2/2022/04/what-is-metaverse-learn-everthing-about-it.jpg';



export default function Quaters() {
    return (
        <>

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
                                Program of Studies
                            </Text>
                            <br />

                        </Heading>
                        <Text color={'gray.500'}>
                            This curriculum is intended for beginners who want to learn software development from the ground up. The first two quarters are shared by all specialities and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a year-long hybrid programme that includes both onsite and online classes and is divided into four quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.
                        </Text>

                    </Stack>

                </Stack>
            </Container>
            <Text mb={{ sm: 500, lg: -10 }}></Text>

            <Center mt={{ lg: -40 }} py={12} justifyContent={'space-around'} p={10} h={650}>
                <Stack direction={{ base: 'column', md: 'column', lg: 'row' }}>

                    <Box
                        role={'group'}
                        p={6}
                        maxW={'330px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.800')}
                        boxShadow={'2xl'}
                        rounded={'lg'}
                        pos={'relative'}
                        zIndex={1}
                        h={400} mb={{ base: 20, md: 20 }}>

                        <Box
                            rounded={'lg'}
                            mt={-12}
                            pos={'relative'}
                            height={'230px'}
                            _after={{
                                transition: 'all .3s ease',
                                content: '""',
                                w: 'full',
                                h: 'full',
                                pos: 'absolute',
                                top: 5,
                                left: 0,
                                backgroundImage: `url(${IMAGETS})`,
                                filter: 'blur(15px)',
                                zIndex: -1,
                            }}
                            _groupHover={{
                                _after: {
                                    filter: 'blur(20px)',
                                },
                            }}>

                            <Image
                                rounded={'lg'}
                                height={230}
                                width={282}
                                objectFit={'cover'}
                                src={IMAGETS}

                            />
                        </Box>
                        <Stack pt={10} align={'center'}>
                            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                                Quarter 1
                            </Text>
                            <Heading fontSize={'1xl'} fontFamily={'body'} fontWeight={500}>
                                Object-Oriented Programing
                            </Heading>
                            <Stack direction={'row'} align={'center'}>
                                <Text fontWeight={800} fontSize={'xl'}>
                                    CS-101
                                </Text>

                            </Stack>
                        </Stack>

                    </Box>
                    <Box
                        role={'group'}
                        p={6}
                        maxW={'330px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.800')}
                        boxShadow={'2xl'}
                        rounded={'lg'}
                        pos={'relative'}
                        zIndex={1}
                        h={400} mb={{ base: 20, md: 20 }}>
                        <Box
                            rounded={'lg'}
                            mt={-12}
                            pos={'relative'}
                            height={'230px'}
                            _after={{
                                transition: 'all .3s ease',
                                content: '""',
                                w: 'full',
                                h: 'full',
                                pos: 'absolute',
                                top: 5,
                                left: 0,
                                backgroundImage: `url(${IMAGENext})`,
                                filter: 'blur(15px)',
                                zIndex: -1,
                            }}
                            _groupHover={{
                                _after: {
                                    filter: 'blur(20px)',
                                },
                            }}>

                            <Image
                                rounded={'lg'}
                                height={230}
                                width={282}
                                objectFit={'cover'}
                                src={IMAGENext}

                            />
                        </Box>
                        <Stack pt={10} align={'center'}>
                            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                                Quarter 2
                            </Text>
                            <Heading fontSize={'1xl'} fontFamily={'body'} fontWeight={500} textAlign={'center'}>
                                Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13
                            </Heading>
                            <Stack direction={'row'} align={'center'}>
                                <Text fontWeight={800} fontSize={'xl'}>
                                    w2-201
                                </Text>

                            </Stack>
                        </Stack>

                    </Box>
                    <Box
                        role={'group'}
                        p={6}
                        maxW={'330px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.800')}
                        boxShadow={'2xl'}
                        rounded={'lg'}
                        pos={'relative'}
                        zIndex={1}
                        h={400} mb={{ base: 20, md: 20 }}>
                        <Box
                            rounded={'lg'}
                            mt={-12}
                            pos={'relative'}
                            height={'230px'}
                            _after={{
                                transition: 'all .3s ease',
                                content: '""',
                                w: 'full',
                                h: 'full',
                                pos: 'absolute',
                                top: 5,
                                left: 0,
                                backgroundImage: `url(${IMAGESmartContract})`,
                                filter: 'blur(15px)',
                                zIndex: -1,
                            }}
                            _groupHover={{
                                _after: {
                                    filter: 'blur(20px)',
                                },
                            }}>

                            <Image
                                rounded={'lg'}
                                height={230}
                                width={282}
                                objectFit={'cover'}
                                src={IMAGESmartContract}

                            />
                        </Box>
                        <Stack pt={10} align={'center'}>
                            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                                Quarter 3
                            </Text>
                            <Heading fontSize={'1xl'} fontFamily={'body'} fontWeight={500} textAlign={'center'}>
                                Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
                            </Heading>
                            <Stack direction={'row'} align={'center'}>
                                <Text fontWeight={800} fontSize={'xl'}>
                                    W3-351
                                </Text>

                            </Stack>
                        </Stack>

                    </Box>
                    <Box
                        role={'group'}
                        p={6}
                        maxW={'330px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.800')}
                        boxShadow={'2xl'}
                        rounded={'lg'}
                        pos={'relative'}
                        zIndex={1}
                        h={400} mb={{ base: 20, md: 20 }}>
                        <Box
                            rounded={'lg'}
                            mt={-12}
                            pos={'relative'}
                            height={'230px'}
                            _after={{
                                transition: 'all .3s ease',
                                content: '""',
                                w: 'full',
                                h: 'full',
                                pos: 'absolute',
                                top: 5,
                                left: 0,
                                backgroundImage: `url(${IMAGEVR})`,
                                filter: 'blur(15px)',
                                zIndex: -1,
                            }}
                            _groupHover={{
                                _after: {
                                    filter: 'blur(20px)',
                                },
                            }}>

                            <Image
                                rounded={'lg'}
                                height={230}
                                width={282}
                                objectFit={'cover'}
                                src={IMAGEVR}

                            />
                        </Box>
                        <Stack pt={10} align={'center'}>
                            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                                Quarter 4
                            </Text>
                            <Heading fontSize={'1xl'} fontFamily={'body'} fontWeight={500} textAlign={'center'}>
                                Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences
                            </Heading>
                            <Stack direction={'row'} align={'center'}>
                                <Text fontWeight={800} fontSize={'xl'}>
                                    MV-361
                                </Text>

                            </Stack>
                        </Stack>

                    </Box></Stack>

            </Center>


        </>

    );
}