import {
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  Image,
  Icon,
  HStack,
  Box,
  Link,
  Show,
  Hide,
} from "@chakra-ui/react";
import { FiMenu, FiGithub, FiLinkedin } from "react-icons/fi";
import React from "react";
import logo from "../assets/E.Silva.webp";

const Navbar = () => {
  return (
    <HStack
      borderBottomColor="#000"
      borderBottom="1px"
      borderColor="#FBDFB3"
      justifyContent="space-between"
      alignItems="center"
      padding="10px"
      color="#DD813E"
    >
      <Menu>
        <Hide below="sm">
          <MenuButton
            boxSize={6}
            as={IconButton}
            icon={<FiMenu />}
            aria-label="Options"
            variant="outline"
            color="#FBDFB3"
          />
        </Hide>
        <MenuList>
          <MenuItem>About Me</MenuItem>
          <MenuItem>Tecnologies</MenuItem>
          <MenuItem>Projects</MenuItem>
          <MenuItem>Get in Touch</MenuItem>
        </MenuList>
      </Menu>
      <Link href="/">
        <Image
          objectFit="cover"
          w={{ base: "155px" }}
          h={{ base: "42px" }}
          src={logo}
        />
      </Link>
      <Menu>
        <Show below="sm">
          <MenuButton
            boxSize={6}
            as={IconButton}
            icon={<FiMenu />}
            aria-label="Options"
            variant="outline"
            color="#FBDFB3"
          />
        </Show>
        <MenuList>
          <MenuItem>About Me</MenuItem>
          <MenuItem>Tecnologies</MenuItem>
          <MenuItem>Projects</MenuItem>
          <MenuItem>Get in Touch</MenuItem>
        </MenuList>
      </Menu>
      <Hide below="sm">
        <Box>
          <Link href="https://github.com/EduardoSilvaNLC" isExternal>
            <Icon
              boxSize={6}
              as={FiGithub}
              color="#FBDFB3"
              verticalAlign="middle"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/eduardo-silva-156729212"
            isExternal
          >
            <Icon
              boxSize={6}
              as={FiLinkedin}
              color="#FBDFB3"
              verticalAlign="middle"
            />
          </Link>
        </Box>
      </Hide>
    </HStack>
  );
};

export default Navbar;
