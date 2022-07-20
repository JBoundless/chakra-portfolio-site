import React from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Flex, Box, Heading, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { DiWebplatform, DiReact } from 'react-icons/di';

export default function Profile() {
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');
  return (
    <Flex
      direction={isNotSmallerScreen ? 'row' : 'column'}
      w="100%"
      maxWidth={{ base: '100vh', md: '130vh', lg: '130vh', xl: '130vh' }}
    >
      <Box alginSelf="center" px="32" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          5+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Years of experience
        </Text>

        <Text fontWeight="bold" fontSize="2xl">
          UX Developer Intern, focused on web development
        </Text>
        <Flex direction={isNotSmallerScreen ? 'row' : 'column'} mt={8}>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: 'green.400' }}
          >
            <Icon as={DiWebplatform} p="4" w="24" h="24" color="black" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Web Apps
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: 'green.400' }}
          >
            <Icon as={DiReact} p="4" w="24" h="24" color="black" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              React (and React Native) Apps
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
