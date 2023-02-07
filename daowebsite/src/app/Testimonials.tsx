
import {
    Avatar,
    Box,
    chakra,
    Container,
    Flex,
    Stack,
    Icon,
    SimpleGrid,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  const testimonials = [
    {
      name: 'Zia Khan',
      role: 'CEO of Panacloud',
      content:
        'CEO of Panacloud, the world’s first Integrated API Ownership Economy, Crowdfunding, and Development Platform. Volunteer COO of PIAIC, an initiative by the President of Pakistan for AI and computing mass education.',
      avatar:
        'https://pbs.twimg.com/profile_images/1478630664190795778/xuBHOC65_400x400.jpg',
    },
    {
      name: 'Daniyal Nagori',
      role: 'Software Development Lead at Panacloud Pvt Ltd',
      content:
        "Certified Kubernetes Application Developer AWS Certified Developer Coursera React Native Nano Degree. I have been fortunate to be able to architect solutions in as wide an array as Cloud Native, Voice Computing/Chatbot development, Web, Mobile, AI, and Blockchain.",
      avatar:
        'data:image/jpeg;base64,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',
    },
    {
      name: 'Zeeshan Hanif',
      role: 'Head of Software Development at Panacloud Pvt Ltd',
      content:
        "Comprehensive educational background in computer science and business studies. Have a bachelor's degree combined with seven software development certifications from IBM, SUN and Microsoft. Also passed Certified Management Accountant (CMA) examinations from Institute of Management Accountant (IMA), New Jersey and Level 2 of Chartered Financial Analyst (CFA), Charlottesville, Virginia.",
      avatar:
        'https://avatars.githubusercontent.com/u/1311782?v=4',
    },
    {
      name: 'Adil Altaf',
      role: 'CEO at Axiom Enterprises',
      content:
        'I have been working in the software industry for over a decade in which I have accumulated a vast amount of knowledge and experience in all areas of the Full Stack SDLC including architecture and design, development, implementation, integration, and deployment. I’ve been developing internet-scale apps with MERN Stack and JAMstack technologies deployed on multi-cloud serverless and cloud-native platforms.',
      avatar:
        'https://scontent.flyp4-1.fna.fbcdn.net/v/t1.6435-9/78103099_2422683637972875_725688398865498112_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGrm18gkBsG-552wdkN2UpdrZ8598yBPT2tnzn3zIE9PRFIfFpMYJpQSnGWldi4tvg5EasIg2zjw9k1glK5IfU8&_nc_ohc=LstEOJJZ07sAX8tUXgi&tn=8X0RWuSdHhTn4Tlc&_nc_ht=scontent.flyp4-1.fna&oh=00_AfC33hfJej0fjdvK1g7fqzo_ir2DWXexeYStFn_ilHmK0A&oe=640A058C',
    },
  ];
  
  const backgrounds = [
    `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
  ];
  
  interface TestimonialCardProps {
    name: string;
    role: string;
    content: string;
    avatar: string;
    index: number;
  }
  
  function TestimonialCard(props: TestimonialCardProps) {
    const { name, role, content, avatar, index } = props;
    return (
      <Flex
        boxShadow={'lg'}
        maxW={'640px'}
        direction={{ base: 'column-reverse', md: 'row' }}
        width={'full'}
        rounded={'xl'}
        p={10}
        justifyContent={'space-between'}
        position={'relative'}
        bg={useColorModeValue('white', 'gray.800')}
        _after={{
          content: '""',
          position: 'absolute',
          height: '21px',
          width: '29px',
          left: '35px',
          top: '-10px',
          backgroundSize: 'cover',
          backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%239F7AEA'/%3E%3C/svg%3E")`,
        }}
        _before={{
          content: '""',
          position: 'absolute',
          zIndex: '-1',
          height: 'full',
          maxW: '640px',
          width: 'full',
          filter: 'blur(40px)',
          transform: 'scale(0.98)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          top: 0,
          left: 0,
          backgroundImage: backgrounds[index % 4],
        }}>
        <Flex
          direction={'column'}
          textAlign={'left'}
          justifyContent={'space-between'}>
          <chakra.p
            fontFamily={'Inter'}
            fontWeight={'medium'}
            fontSize={'15px'}
            pb={4}>
            {content}
          </chakra.p>
          <chakra.p fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={14}>
            {name}
            <chakra.span
              fontFamily={'Inter'}
              fontWeight={'medium'}
              color={'gray.500'}>
              {' '}
              - {role}
            </chakra.span>
          </chakra.p>
        </Flex>
        <Avatar
          src={avatar}
          height={'80px'}
          width={'80px'}
          alignSelf={'center'}
          m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
        />
      </Flex>
    );
  }
  
  export default function Testimonials() {
    return (
      <Flex
        textAlign={'center'}
        pt={10}
        justifyContent={'center'}
        direction={'column'}
        width={'full'}
        overflow={'hidden'}>
        <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
        
          <chakra.h1
            py={5}
            fontSize={48}
            fontFamily={'Work Sans'}
            fontWeight={'bold'}
            color={useColorModeValue('gray.700', 'gray.50')}>
               
               Highly Qualified Faculty
          </chakra.h1>
          
          <chakra.h2
            margin={'auto'}
            width={'70%'}
            fontFamily={'Inter'}
            fontWeight={'medium'}
            color={useColorModeValue('gray.500', 'gray.400')}>
            We have more than{' '}
            <chakra.strong color={useColorModeValue('gray.700', 'gray.50')}>
              100+
            </chakra.strong>{' '}
            highly qualified faculty
          </chakra.h2>
        </Box>
        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={'20'}
          mt={16}
          mb={16}
          mx={'auto'}>
          {testimonials.map((cardInfo, index) => (
            <TestimonialCard {...cardInfo} index={index} />
          ))}
        </SimpleGrid>
        <Box>
          <Icon viewBox="0 0 40 35" mt={14} boxSize={10} color={'purple.400'}>
            <path
              fill={'currentColor'}
              d="M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"
            />
          </Icon>
        </Box>
      </Flex>
    );
  }