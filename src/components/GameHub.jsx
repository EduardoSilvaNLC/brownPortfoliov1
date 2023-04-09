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
import gamehub from "../assets/gameHub.webp";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GameHub = () => {
  const app = useRef(); // create a ref for the root level element (for scoping)
  const circle = useRef();
  const cabeca = useRef();
  const texto = useRef();
  const feature = useRef();
  const titulo = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(circle.current, {
        scrollTrigger: {
          trigger: circle.current,
          toggleActions: "restart none restart none",
        },
        x: -90,
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
      gsap.from(titulo.current, {
        scrollTrigger: {
          trigger: titulo.current,
          toggleActions: "restart none restart none",
        },
        y: 45,
        opacity: 0,
        duration: 2,
      });
    }, app); // <- IMPORTANT! Scopes selector text
    return () => ctx.revert();
  }, []);
  return (
    <Box
      overflowX="hidden"
      id="projects"
      h={{ base: "100vh", md: "70vh", lg: "85vh", xl: "80vh" }}
    >
      <Box m="40px auto">
        <Text
          textAlign="center"
          fontSize={{ base: "40px", lg: "60px", xl: "50px" }}
          color="#FBDFB3"
          ref={titulo}
        >
          Some Things I've Built
        </Text>
        <Image
          w={{ base: "70%", md: "40%", xl: "30%" }}
          h="1px"
          m="auto"
          src={borda}
        />
      </Box>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        gap={{ base: "1px", xl: "10px" }}
        padding={{ md: "10px" }}
        maxW="1200px"
        margin="auto"
      >
        <Image
          ref={circle}
          borderRadius="20px"
          m={{ base: "auto" }}
          w={{ base: "90%", md: "100%", lg: "100%", xl: "100%" }}
          src={gamehub}
        />
        <Flex direction="column">
          <Box mt="30px" textAlign={{ base: "center", md: "end", xl: "end" }}>
            <Text
              ref={feature}
              fontSize={{ base: "10px", md: "15px", lg: "17px", xl: "18px" }}
            >
              Featured Project
            </Text>
            <Text
              ref={cabeca}
              color="#DD813E"
              fontSize={{ base: "30px", md: "40px", lg: "50px", xl: "50px" }}
            >
              Game Hub
            </Text>
            <Text
              ref={texto}
              fontSize={{ base: "15px", md: "18px", lg: "20px", xl: "22px" }}
              color="#1B0E18"
              bgColor="#FBDFB3"
              borderRadius="3px"
              p="15px"
              maxW={{ base: "300px", md: "390px", lg: "500px", xl: "585px" }}
              ml={{ md: "auto", lg: "auto", xl: "auto" }}
              m={{ base: "auto", md: "auto", lg: "auto" }}
            >
              Game Hub is an app that allows users to see the rate of the game,
              and which platform they are available on.
            </Text>
          </Box>
          <Box textAlign={{ base: "center", md: "end", xl: "end" }}>
            <Link href="https://github.com/EduardoSilvaNLC/game-hub" isExternal>
              <Icon
                m={{ base: "10px 10px", xl: "30px 5px" }}
                boxSize={6}
                as={FiGithub}
                color="#DD813E"
                verticalAlign="middle"
              />
            </Link>
            <Link href="https://game-hub-swart.vercel.app" isExternal>
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
      </SimpleGrid>
    </Box>
  );
};

export default GameHub;
