import React from "react";
import Nav from "./nav/Nav";
import { Box, Image } from "@chakra-ui/react"; // Chakra UI para estilos e imágenes

function Header() {
  const handleLogoClick = () => {
    window.location.href = "/"; // Redirige a la página de inicio
  };

  return (
    <Box as="header" textAlign="center" py={6} bg="#FF6533">
      {/* Imagen del ícono con evento onClick para ir al inicio */}
      <Image 
        src="\Imagen de WhatsApp 2024-09-18 a las 02.57.19_dc1fas50c15.jpg"  // Reemplaza con la URL de tu ícono
        alt="TuCMascota logo" 
        boxSize="130px" // Tamaño del ícono
        height="50px"
        mx="5" // Centra la imagen
        cursor="pointer" // Cambia el cursor para indicar que es clicable
        onClick={handleLogoClick} // Navega al inicio al hacer clic
      />
      
      <Nav />
    </Box>
  );
}

export default Header;
