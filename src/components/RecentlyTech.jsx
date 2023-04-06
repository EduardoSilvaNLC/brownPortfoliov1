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
import React, { useEffect, useRef } from "react";
import borda from "../assets/borda.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RecentlyTech = () => {
  const app = useRef(); // create a ref for the root level element (for scoping)
  const cabeca = useRef();
  const texto = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(cabeca.current, {
        scrollTrigger: {
          trigger: cabeca.current,
          toggleActions: "restart none restart none",
        },
        y: -45,
        delay: 1,
        opacity: 0,
        duration: 3,
      });
      gsap.from(texto.current, {
        scrollTrigger: {
          trigger: texto.current,
          toggleActions: "restart none restart none",
        },
        y: 45,
        opacity: 0,
        duration: 3,
      });
    }, app); // <- IMPORTANT! Scopes selector text
    return () => ctx.revert();
  }, []);
  return (
    <Stack minHeight="100vh" maxW="1024px" m="auto" id="tech">
      <Box m="50px auto">
        <Text
          ref={cabeca}
          textAlign="center"
          fontSize={{ base: "40px", lg: "60px", xl: "50px" }}
          color="#FBDFB3"
        >
          Recent Technologies
        </Text>
        <Image w="60%" h="1px" src={borda} m="auto" />
      </Box>
      <Accordion allowToggle padding="10px" ref={texto}>
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
            As a react developer, most of my projects were created with this
            library, this helped me to create useful and fast websites.
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
            I started to study TypeScript a few weeks ago, and soon I will
            create some apps.
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
            Gsap is my favorite tool to animate my projects.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  );
};

export default RecentlyTech;
