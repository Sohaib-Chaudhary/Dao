import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    AspectRatio

} from '@chakra-ui/react';

import {

    GiArtificialIntelligence,

} from 'react-icons/gi';
import {

    TbBrandMeta

} from 'react-icons/tb';
import {

    AiFillCloud

} from 'react-icons/ai';
import { ReactElement } from 'react';

interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
};

export default function Plan() {
    return (
        <Container maxW={'5xl'} py={12} mb={20}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack spacing={4}>
                    <Text
                        textTransform={'uppercase'}
                        color={'blue.400'}
                        fontWeight={600}
                        fontSize={'sm'}
                        bg={useColorModeValue('blue.50', 'blue.900')}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}>
                        Mission
                    </Text>
                    <Heading>Presidential Initiative
                        for Artificial Intelligence & Computing (PIAIC)</Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution.
                    </Text>
                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.100', 'gray.700')}
                            />
                        }>
                        <Feature
                            icon={
                                <Icon as={TbBrandMeta} color={'yellow.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                            text={'Web 3 & Metaverse'}
                        />
                        <Feature
                            icon={<Icon as={GiArtificialIntelligence} color={'green.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('green.100', 'green.900')}
                            text={'Artificial Intelligence'}
                        />
                        <Feature
                            icon={
                                <Icon as={AiFillCloud} color={'purple.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('purple.100', 'purple.900')}
                            text={'Cloud Computing'}
                        />
                    </Stack>
                </Stack>

              
<AspectRatio w={{base:380,md:450,lg:700}} h={'auto'} ratio={1}>
<iframe  src="https://www.youtube.com/embed/PwLzOxLe4zc" title="PIAIC Registrations Open Now in METAVERSE Course" />
</AspectRatio>

                
               
                

            </SimpleGrid>
        </Container>
    );
}