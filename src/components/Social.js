import React from 'react';
import { HStack } from '@chakra-ui/layout';
import { FaFacebookF, FaTwitter, FaInstagram, FaGoogle } from 'react-icons/fa';
import Icon from '@chakra-ui/icon';

export default function Social() {
  return (
    <HStack>
      <Icon as={FaFacebookF} boxSize="50" />
      <Icon as={FaTwitter} boxSize="50" />
      <Icon as={FaInstagram} boxSize="50" />
      <Icon as={FaGoogle} boxSize="50" />
    </HStack>
  );
}
