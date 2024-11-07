import React, { useState, useEffect } from "react";
import Nav from "./nav/Nav";
import { Box, Image } from "@chakra-ui/react"; // Chakra UI para estilos e imágenes

function Header() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "orange.jpg",
    "orange.jpg",
    "orange.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); 

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [images.length]);

  const handleLogoClick = () => {
    window.location.href = "/"; // Redirige a la página de inicio
  };

  return (
    <Box>
      {/* Header con logo y navegación */}
      <Box as="header" textAlign="center" py={4} bg="#FF6533">
        <Image
          src="\Imagen de WhatsApp 2024-09-18 a las 02.57.19_dc1fas50c15.jpg"
          alt="TuCMascota logo"
          boxSize="80px" // Ajuste de tamaño del logo para móvil
          height="40px"
          mx="5"
          cursor="pointer"
          onClick={handleLogoClick}
        />
        <Nav />
      </Box>

      {/* Carrusel de imágenes para móvil */}
      <Box mt={0} textAlign="center">
        <Image
          src={images[currentImageIndex]}
          alt={`Imagen ${currentImageIndex + 1}`}
          boxSize="100%" // Tamaño más pequeño para pantallas móviles
          objectFit="cover"
          mx="auto"
          borderRadius="md"
          boxShadow="lg"
        />
      </Box>
    </Box>
  );
}

export default Header;
