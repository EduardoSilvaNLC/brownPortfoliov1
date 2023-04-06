import {
  Box,
  Flex,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import borda from "../assets/borda.webp";
import mum from "../assets/mums.webp";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Mums = () => {
  const app = useRef(); // create a ref for the root level element (for scoping)
  const circle = useRef();
  const cabeca = useRef();
  const texto = useRef();
  const feature = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(circle.current, {
        scrollTrigger: {
          trigger: circle.current,
          toggleActions: "restart none restart none",
        },
        x: 90,
        duration: 2,
      });
      gsap.from(cabeca.current, {
        scrollTrigger: {
          trigger: cabeca.current,
          toggleActions: "restart none restart none",
        },
        y: -45,
        delay: 1,
        opacity: 0,
        duration: 2,
      });
      gsap.from(feature.current, {
        scrollTrigger: {
          trigger: feature.current,
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
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      gap={{ base: "1px", xl: "10px" }}
      padding={{ md: "10px" }}
      maxW="1200px"
      margin="auto"
    >
      <Flex direction="column">
        <Box textAlign={{ base: "center", md: "start", xl: "start" }}>
          <Text
            ref={feature}
            fontSize={{ base: "10px", md: "15px", lg: "17px", xl: "18px" }}
          >
            Featured Project
          </Text>
          <Text
            ref={cabeca}
            color="#DD813E"
            fontSize={{ base: "30px", md: "35px", lg: "40px", xl: "50px" }}
          >
            Mum's Café Cambridge
          </Text>
          <Text
            ref={texto}
            fontSize={{ base: "15px", md: "15px", lg: "18px", xl: "22px" }}
            color="#1B0E18"
            bgColor="#FBDFB3"
            borderRadius="3px"
            p="15px"
            maxW={{ base: "300px", md: "390px", lg: "500px", xl: "585px" }}
            ml={{ md: "auto", lg: "auto", xl: "auto" }}
            m={{ base: "auto", md: "auto", lg: "auto" }}
          >
            Mum’s Café Cambridge is one of my first projects that I created for
            my wife's restaurant. I made the design and coded with basic HTML,
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
        borderRadius="20px"
        ref={circle}
        m={{ base: "auto" }}
        w={{ base: "90%", md: "100%", lg: "100%", xl: "100%" }}
        src={mum}
      />
    </SimpleGrid>
  );
};

export default Mums;
