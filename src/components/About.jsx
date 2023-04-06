import { Box, Icon, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import borda from "../assets/borda.webp";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const tech = useRef(); // create a ref for the root level element (for scoping)
  const circle = useRef();
  const cabeca = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(circle.current, {
        scrollTrigger: {
          trigger: circle.current,
          toggleActions: "restart none restart none",
        },
        x: -90,
        duration: 3,
      });
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
    }, tech); // <- IMPORTANT! Scopes selector text
    return () => ctx.revert();
  }, []);

  return (
    <SimpleGrid
      ref={tech}
      id="about"
      h="100vh"
      columns={{ base: 1, md: 2 }}
      gap={{ base: "1px", xl: "10px" }}
      padding={{ md: "10px" }}
    >
      <Box textAlign="center" m="auto">
        <Text
          fontSize={{ base: "40px", lg: "60px", xl: "50px" }}
          color="#FBDFB3"
          ref={cabeca}
        >
          About me
        </Text>

        <Image w="20%" m="auto" h="1px" src={borda} />
      </Box>
      <Box
        ref={circle}
        m={{ base: "1px", md: "auto", xl: "auto" }}
        p={{ base: "15px", md: "15px" }}
        textAlign={{ base: "justify" }}
        lineHeight={{ base: 1.7 }}
      >
        <Text fontSize={{ md: "20px", lg: "30px", xl: "20px" }}>
          Hello! My name is Eduardo, and I enjoy creating apps and websites
          which will make peoples life's easier. My interest in web development
          started back in 2019 when I decided to try and create a website for my
          wife's business using HTML & CSS. Fast-forward to today, I now do some
          work on Fiverr as a freelancer to expand my knowledge in React. My
          main focus these days is building accessible, funny, and useful
          websites for everyone.
        </Text>
      </Box>
    </SimpleGrid>
  );
};

export default About;
