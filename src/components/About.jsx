import { Box, Icon, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import borda from "../assets/borda.webp";

const About = () => {
  return (
    <SimpleGrid
      id="about"
      h="100vh"
      columns={{ base: 1, md: 2 }}
      gap={{ base: "1px", xl: "10px" }}
      padding={{ md: "10px" }}
    >
      <Box m="auto">
        <Text
          fontSize={{ base: "40px", lg: "60px", xl: "50px" }}
          color="#FBDFB3"
        >
          About me
        </Text>

        <Image w="100%" h="1px" src={borda} />
      </Box>
      <Box
        m={{ base: "1px", md: "auto", xl: "auto" }}
        p={{ base: "15px", md: "15px" }}
        textAlign={{ base: "justify" }}
        lineHeight={{ base: 1.7 }}
      >
        <Text fontSize={{ md: "20px", lg: "30px", xl: "20px" }}>
          Hello! My name is Eduardo and I enjoy creating app and website to make
          the people life easier. My interest in web development started back in
          2019 when I decided to try creating a website for my wife using HTML &
          CSS. Fast-forward to today, I started working at Fiverr as a
          freelancer to expand my knowledge in JavaScript and React. My main
          focus these days is building accessible, funny, and useful websites to
          everyone.
        </Text>
      </Box>
    </SimpleGrid>
  );
};

export default About;
