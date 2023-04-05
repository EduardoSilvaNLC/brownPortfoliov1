import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import borda from "../assets/borda.webp";

const RecentlyTech = () => {
  return (
    <Stack minHeight="100vh" maxW="1024px" m="auto" id="tech">
      <Box m="50px auto">
        <Text
          textAlign="center"
          fontSize={{ base: "40px", lg: "60px", xl: "50px" }}
          color="#FBDFB3"
        >
          Recently Technologies Worked
        </Text>
        <Image w="60%" h="1px" src={borda} m="auto" />
      </Box>
      <Accordion allowToggle padding="10px">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                React
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            As one react developer, most of my projects was created with this
            library that help me to create useful and fast websites.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                TypeScript
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            TypeScript is my new tool that I still studying about it.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Gsap
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Gsap is my favorite tool to animated my websites and my portfolio.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  );
};

export default RecentlyTech;
