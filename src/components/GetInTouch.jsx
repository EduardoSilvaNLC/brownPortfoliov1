import { Box, Button, Image, Link, Stack, Text } from "@chakra-ui/react";
import borda from "../assets/borda.webp";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GetInTouch = () => {
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
        y: 90,
        duration: 1.4,
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
    }, tech); // <- IMPORTANT! Scopes selector text
    return () => ctx.revert();
  }, []);
  return (
    <Stack h="100vh" id="getin">
      <Box m="auto" textAlign="center">
        <Text
          ref={cabeca}
          fontSize={{ base: "40px", lg: "60px", xl: "50px" }}
          color="#FBDFB3"
        >
          Get in Touch
        </Text>
        <Image m="auto" w="20%" h="1px" src={borda} />
        <Box>
          <Text
            ref={circle}
            p="10px"
            mt="20px"
            fontSize={{ xl: "23px" }}
            maxW="900px"
          >
            I’m currently looking for new opportunities, please feel free to
            send me a message. I will answer your message as soon as I can.
          </Text>
          <Link href="mailto:eduardo@eduardosilvanlc.com" isExternal>
            <Button
              bgColor="#1B0F18"
              color="#DD813E"
              mt={8}
              size={{ base: "sm", md: "md", lg: "lg" }}
            >
              Send Message
            </Button>
          </Link>
        </Box>
      </Box>
    </Stack>
  );
};

export default GetInTouch;
