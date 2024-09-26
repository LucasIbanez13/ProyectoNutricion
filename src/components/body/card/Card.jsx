import React from 'react';
import { Box, Image, Text, IconButton, Button, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import HeartButton from './HeartButton'; // Asegúrate de que la ruta sea correcta

function AdoptionCard() {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate('/details');
  };

  return (
    <Box
      maxW="400px" // Tamaño fijo del contenedor
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      position="relative"
      bg="white"
      mb="4"
    >
      {/* Imagen de la mascota con tamaño fijo */}
      <Image
        src="Imagen de WhatsApp 2024-09-21 a las 18.55.50_6051d243.jpg"
        alt="Perrito en adopción"
        objectFit="cover"
        width="400px" // Fijamos el ancho
        height="350px" // Fijamos la altura
      />

      {/* Corazón para agregar a favoritos */}
      <Box position="absolute" top="2" right="2">
        <HeartButton /> {/* Aquí reemplazas el código del corazón por tu nuevo componente */}
      </Box>

      {/* Ubicación en la esquina inferior derecha de la imagen */}
      <Text
        position="absolute"
        bottom="160px" 
        right="2px" 
        color="white"
        bg="rgba(0, 0, 0, 0.1)"
        p="2"
        borderRadius="md"
        fontSize="sm"
      >
        Talitas / Tucumán
      </Text>

      {/* Título y detalles de la mascota */}
      <Box p="4">
        {/* Título */}
        <Text fontWeight="bold" fontSize="xl" mb="2" textAlign="center">
          Perritos en Adopción
        </Text>

        {/* Sexo */}
        <Text fontSize="md" mb="2" textAlign="center">
          Macho/Hembra
        </Text>

        {/* Botón "Ver más" */}
        <Button colorScheme="orange" mt="4" w="full" onClick={handleViewMore}>
          Ver más
        </Button>
      </Box>
    </Box>
  );
}

function CardContainer() {
  return (
    <Flex
      direction="row"
      wrap="wrap"
      justify="center"
      p={4}
    >
      <AdoptionCard />

      {/* Añadir más tarjetas aquí */}
    </Flex>
  );
}

export default CardContainer;
