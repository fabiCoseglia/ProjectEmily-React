import {
  Box,
  Heading,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import aboutImg from "../assets/emilia-about.jpg";

export const About = () => {
  const marginTop = useBreakpointValue({ base: "11rem", md: "0" });

  return (
    <Box
      h="80vh"
      bgImage={`url(${aboutImg})`}
      bgSize="cover"
      bgPosition="center"
      position="relative"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        padding={{ base: "1rem", md: "2rem" }}
        background="linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%)"
        height="100%"
        color="white"
      >
        <VStack spacing="1rem" alignItems="flex-start" width="100%">
          <Heading
            as="h2"
            fontSize={{ base: "6vh", md: "12vh" }}
            marginBottom="1rem"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            ABOUT
            <br />
            EMILIA / /
          </Heading>
          <Box className="boxContainer" marginTop={marginTop}>
            <Box marginBottom="20px">
              <Text
                fontSize={{ base: "lg", md: "lg" }}
                color="aquamarine"
                marginBottom="1rem"
              >
                Seatle-based pop star makes her indie debut with a hauntingly
                beautiful album
              </Text>
              <Text
                fontSize={{ base: "sm", md: "sm" }}
                fontStyle="italic"
                marginLeft="1rem"
                marginTop="-2.5"
              >
                - John Trickle, Music Today Post
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "lg", md: "lg" }}
                color="aquamarine"
                marginBottom="1rem"
              >
                Emilia Cole is one of the scene's breakout stars
              </Text>
              <Text
                fontSize={{ base: "sm", md: "sm" }}
                fontStyle="italic"
                marginLeft="1rem"
                marginTop="-2.5"
              >
                - John Trickle, Music Today Post
              </Text>
            </Box>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};
