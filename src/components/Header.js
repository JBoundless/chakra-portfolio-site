import React from 'react';
import { useColorMode } from '@chakra-ui/color-mode';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';

export default function Header() {
  const { colorMode } = useColorMode;
  const isDark = colorMode == 'dark';
  const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)');
  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      ></Circle>
      <Flex
        direction={isNotSmallerScreen ? 'row' : 'column'}
        spacing="200px"
        p={isNotSmallerScreen ? '32' : '0'}
      >
        <Box mt={isNotSmallerScreen ? '0' : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Jordan Pagkalinawan
          </Text>
          <Text color={isDark ? 'gray.200' : 'gray.500'}>
            Frontend Developer experienced in HTML, CSS, and ReactJS. Currently
            learning NextJS.
          </Text>
          <Button
            mt={8}
            colorScheme="blue"
            onClick={() => window.open('https://jpagka22.wordpress.com')}
          >
            Learn more
          </Button>
        </Box>
        <Image
          alignSelf="center"
          mt={isNotSmallerScreen ? '0' : '12'}
          mb={isNotSmallerScreen ? '0' : '12'}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src="https://raw.githubusercontent.com/JBoundless/chakra-portfolio-site/main/Senior%20Pic%202.JPG"
        />
      </Flex>
    </Stack>
  );
}
