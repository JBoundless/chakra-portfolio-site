import React from 'react';
import './style.css';
import { VStack, Flex, Heading, Spacer } from '@chakra-ui/layout';
import Header from './components/Header';
import Profile from './components/Profile';
import Social from './components/Social';
import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode == 'dark';
  return (
    <VStack p="5">
      <Flex w="100%">
        <Heading ml={8} size="md" fontWeight="semibold" color="cyan.400">
          Jordan Pagkalinawan
        </Heading>
        <Spacer></Spacer>
        <IconButton
          ml={2}
          icon={<FaLinkedin />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          mml={2}
          icon={<FaInstagram />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          mml={2}
          icon={<FaGithub />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          mml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
      <Header />
      <Social />
      <Profile />
    </VStack>
  );
}
