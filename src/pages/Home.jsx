import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import emilyHomeImg from "../assets/emilia-home.jpg";

export const Home = () => {
  return (
    <Box
      h="80vh"
      bgImage={`url(${emilyHomeImg})`}
      bgSize="cover"
      bgPosition="center"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "50%",
        background:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 100%)",
      }}
      _after={{
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "50%",
        background:
          "linear-gradient(to top, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 100%)",
      }}
    >
      <Box
        position="absolute"
        top="60vh"
        left="0"
        right="0"
        bottom="0"
        display="block"
        textAlign="center"
        justifyContent="center"
        width="100%"
      >
        <Box
          as="h2"
          fontSize="4vh"
          color="black"
          bg="rgba(255, 255, 255, 0.5)"
          letterSpacing="2px"
        >
          TWIST IN MY REALITY
        </Box>
      </Box>
    </Box>
  );
};
