import React from 'react';
import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { FaFacebook, FaSpotify, FaTwitter, FaInstagram, FaAmazon, FaApple } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="white" borderTop="1px" borderColor="gray.200" boxShadow="md">
      <Flex
        maxW="1200px"
        mx="auto"
        py={4}
        px={6}
        alignItems="center"
        justifyContent="center"
      >
        <IconButton
          as="a"
          href="#"
          aria-label="Facebook"
          icon={<FaFacebook />}
          fontSize="2xl"
          color="black"
          variant="ghost"
          mx={2}
        />
        <IconButton
          as="a"
          href="#"
          aria-label="Spotify"
          icon={<FaSpotify />}
          fontSize="2xl"
          color="black"
          variant="ghost"
          mx={2}
        />
        <IconButton
          as="a"
          href="#"
          aria-label="Twitter"
          icon={<FaTwitter />}
          fontSize="2xl"
          color="black"
          variant="ghost"
          mx={2}
        />
        <IconButton
          as="a"
          href="#"
          aria-label="Instagram"
          icon={<FaInstagram />}
          fontSize="2xl"
          color="black"
          variant="ghost"
          mx={2}
        />
        <IconButton
          as="a"
          href="#"
          aria-label="Amazon"
          icon={<FaAmazon />}
          fontSize="2xl"
          color="black"
          variant="ghost"
          mx={2}
        />
        <IconButton
          as="a"
          href="#"
          aria-label="Apple"
          icon={<FaApple />}
          fontSize="2xl"
          color="black"
          variant="ghost"
          mx={2}
        />
      </Flex>
      <Flex justifyContent="center" py={2}>
        <Text fontSize="sm" color="gray.500">
          Developed by: @fabiCoseglia
        </Text>
      </Flex>
    </Box>
   
  );
};

export default Footer;
