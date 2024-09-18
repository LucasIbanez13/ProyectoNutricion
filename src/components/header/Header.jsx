import React from "react";
import Nav from "./nav/Nav";
import { Box, Heading } from "@chakra-ui/react"; // Chakra UI para estilos

function Header() {
  return (
    <Box as="header" textAlign="center" py={6} bg="teal.500">
      <Heading 
        as="h1" 
        size="2xl"
        color="white"
      >
        TuCMascota
      </Heading>
      <Nav />
    </Box>
  );
}

export default Header;
