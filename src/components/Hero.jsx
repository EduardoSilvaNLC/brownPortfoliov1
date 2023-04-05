import { Box, Button, Image, Link, Stack, Text } from "@chakra-ui/react";
import borda from "../assets/borda.webp";
import { gsap } from "gsap";

const gsapFade = () => {
  gsap.from("#heroi", {
    duration: 3.3,
    opacity: 0,
    ease: "back.out(1.7)",
    y: 300,
  });
};

const handleProject = () => {
  gsap.to(window, { duration: 1, scrollTo: "#projects" });
};

const Hero = () => {
  return (
    <Stack spacing={2} padding="10px" id="heroi" onLoad={gsapFade}>
      <Box
        pos={{ base: "relative", md: "relative" }}
        top={{ base: "24vh", md: "22vh" }}
        ml={{ md: "80px" }}
      >
        <Text
          fontSize={{ base: "12px", md: "sm", lg: "14px", xl: "15px" }}
          color="#DD813E"
        >
          Hi my name is,
        </Text>
        <Text
          fontSize={{ base: "35px", md: "6xl", lg: "60px", xl: "65px" }}
          color="#FBDFB3"
        >
          EDUARDO SILVA
        </Text>
        <Text
          fontSize={{ base: "12px", md: "2xl", lg: "16px", xl: "18px" }}
          color="#DD813E"
        >
          JUNIOR WEB DEVELOPER.
        </Text>
        <Text
          mt={{ base: "10px" }}
          fontSize={{ base: "20px", md: "4xl", lg: "40px", xl: "50px" }}
          color="#FBDFB3"
        >
          I build useful website for the web.
        </Text>
        <Image
          mt={{ base: "10px" }}
          w={{ base: "75%", md: "80%", lg: "65%", xl: "52%" }}
          h="1px"
          src={borda}
        />
        <Box mt={{ base: 6, lg: 9 }}>
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
