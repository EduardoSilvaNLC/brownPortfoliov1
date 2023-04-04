import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import borda from "../assets/borda.webp";
import React from "react";

const GetInTouch = () => {
  return (
    <Stack h="100vh">
      <Box m="auto" textAlign="center">
        <Text
          fontSize={{ base: "40px", lg: "60px", xl: "50px" }}
          color="#FBDFB3"
        >
          Get in Touch
        </Text>
        <Image m="auto" w="20%" h="1px" src={borda} />
        <Box>
          <Text p="10px" mt="20px" fontSize={{ xl: "23px" }} maxW="900px">
            I’m currently looking for new opportunities, please feel free to
            send me a message. I will answer your message as soon as possible.
          </Text>
          <Button
            mailto="eduardo@eduardosilva.com"
            bgColor="#1B0F18"
            color="#DD813E"
            mt={8}
            size={{ base: "sm", md: "md", lg: "lg" }}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default GetInTouch;
