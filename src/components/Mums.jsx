import {
  Box,
  Flex,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import borda from "../assets/borda.webp";
import mum from "../assets/mums.webp";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const GameHub = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      gap={{ base: "1px", xl: "10px" }}
      padding={{ md: "10px" }}
      maxW="1200px"
      margin="auto"
    >
      <Flex direction="column">
        <Box textAlign={{ base: "center", md: "start", xl: "start" }}>
          <Text fontSize={{ base: "10px", md: "15px", lg: "17px", xl: "18px" }}>
            Featured Project
          </Text>
          <Text
            color="#DD813E"
            fontSize={{ base: "30px", md: "35px", lg: "40px", xl: "50px" }}
          >
            Mum's Cafe Cambridge
          </Text>
          <Text
            fontSize={{ base: "15px", md: "15px", lg: "18px", xl: "22px" }}
            color="#1B0E18"
            bgColor="#FBDFB3"
            borderRadius="3px"
            p="15px"
            maxW={{ base: "300px", md: "390px", lg: "500px", xl: "585px" }}
            ml={{ md: "auto", lg: "auto", xl: "auto" }}
            m={{ base: "auto", md: "auto", lg: "auto" }}
          >
            Mum’s Café Cambridge is one of my first project that I created for
            my wife restaurant. I made the design and codify with basic HTML,
            CSS and JavaScript.
          </Text>
        </Box>
        <Box textAlign={{ base: "center", md: "start", xl: "start" }}>
          <Link href="https://github.com/EduardoSilvaNLC" isExternal>
            <Icon
              m={{ base: "10px 10px", xl: "30px 5px" }}
              boxSize={6}
              as={FiGithub}
              color="#DD813E"
              verticalAlign="middle"
            />
          </Link>
          <Link href="https://mumscafecambridge.com" isExternal>
            <Icon
              m={{ xl: "30px 5px" }}
              boxSize={6}
              as={FiExternalLink}
              color="#DD813E"
              verticalAlign="middle"
            />
          </Link>
        </Box>
      </Flex>
      <Image
        m={{ base: "auto" }}
        w={{ base: "90%", md: "100%", lg: "100%", xl: "100%" }}
        src={mum}
      />
    </SimpleGrid>
  );
};

export default GameHub;
