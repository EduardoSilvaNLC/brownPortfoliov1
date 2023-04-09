import { Box, Button, Image, Link, Stack, Text } from "@chakra-ui/react";
import borda from "../assets/borda.webp";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const handleProject = () => {
  gsap.to(window, { duration: 1, scrollTo: "#projects" });
};

const Hero = () => {
  const heroAnime = useRef();
  const firstEntrance = useRef();
  const secondEntrance = useRef();
  const titleShow = useRef();
  const thirdEntrance = useRef();
  const hireMe = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(firstEntrance.current, { opacity: 0, y: -70, duration: 1.2 });
      gsap.from(secondEntrance.current, {
        opacity: 0,
        y: 70,
        duration: 1.5,
        delay: 2,
      });
      gsap.from(thirdEntrance.current, {
        opacity: 0,
        y: 90,
        duration: 1.5,
        delay: 3,
      });
      gsap.from(titleShow.current, { opacity: 0, duration: 1.3, delay: 1.5 });
      gsap.from(hireMe.current, {
        opacity: 0,
        x: -40,
        duration: 1.3,
        delay: 1.5,
      });
    }, heroAnime); // <- IMPORTANT! Scopes selector text
    return () => ctx.revert();
  }, []);

  return (
    <Stack
      textAlign="center"
      spacing={2}
      padding="10px"
      //onLoad={gsapFade}
      h="100vh"
    >
      <Box
        pos={{ base: "relative", md: "relative" }}
        top={{ base: "24vh", md: "22vh" }}
      >
        <Text
          fontSize={{ base: "12px", md: "sm", lg: "14px", xl: "15px" }}
          color="#DD813E"
          ref={firstEntrance}
        >
          Hi my name is,
        </Text>
        <Text
          fontSize={{ base: "35px", md: "6xl", lg: "60px", xl: "65px" }}
          color="#FBDFB3"
          ref={titleShow}
        >
          EDUARDO SILVA
        </Text>
        <Text
          fontSize={{ base: "12px", md: "2xl", lg: "16px", xl: "18px" }}
          color="#DD813E"
          ref={secondEntrance}
        >
          JUNIOR WEB DEVELOPER.
        </Text>
        <Text
          mt={{ base: "10px" }}
          fontSize={{ base: "20px", md: "4xl", lg: "40px", xl: "50px" }}
          color="#FBDFB3"
          ref={thirdEntrance}
        >
          I build useful websites for the web.
        </Text>
        <Image w="40%" m="30px auto" h="1px" src={borda} />
        <Box mt={{ base: 6, lg: 9 }} ref={hireMe}>
          <Link href="mailto:eduardo@eduardosilvanlc.com" isExternal>
            <Button
              bgColor="#DD813E"
              color="#1B0F18"
              size={{ base: "sm", md: "md", lg: "lg" }}
            >
              Hire-me
            </Button>
          </Link>

          <Button
            bgColor="#1B0F18"
            color="#DD813E"
            ml={2}
            size={{ base: "sm", md: "md", lg: "lg" }}
            onClick={handleProject}
          >
            Projects
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default Hero;
