import React from 'react';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="white" borderBottom="1px" borderColor="gray.200" boxShadow="md">
      <Flex
        maxW="1200px"
        mx="auto"
        py={3}
        px={6}
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
      >
       <Heading size="md" fontWeight="bold" as='h1' letterSpacing='1.5px'>
          EMILIA COLE / /
        </Heading>
        <Spacer />
        <Flex as="nav" alignItems="center" display={{ base: 'none', md: 'flex' }}>
          <NavItem to="/" text="HOME" />
          <NavItem to="/about" text="ABOUT" />
          <NavItem to="/contact" text="CONTACT" />
        </Flex>
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open menu"
          variant="outline"
          display={{ base: 'block', md: 'none' }}
          onClick={onToggle}
        />
      </Flex>
      {isOpen && (
        <Flex as="nav" direction="column" alignItems="center" py={2}>
          <NavItem to="/" text="HOME" />
          <NavItem to="/about" text="ABOUT" />
          <NavItem to="/contact" text="CONTACT" />
        </Flex>
      )}
    </Box>
  );
};

const NavItem = ({ to, text }) => {
  return (
    <Link
      as={RouterLink}
      to={to}
      p={2}
      color="gray.700"
      fontWeight="medium"
      _hover={{ textDecoration: 'underline' }}
    >
      {text}
    </Link>
  );
};

export default Header;
