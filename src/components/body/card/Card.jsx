import React from 'react';
import { Box, Image, Text, IconButton, Button, Flex } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function AdoptionCard() {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate('/details');
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      position="relative"
      bg="white"
      mb="4"
    >
      {/* Imagen de la mascota */}
      <Image
        src="https://via.placeholder.com/400x250"
        alt="Perrito en adopción"
        objectFit="cover"
        w="full"
        h="250px"
      />

      {/* Corazón para agregar a favoritos */}
      <IconButton
        icon={<FaHeart boxSize={8} />} 
        fontSize="35px"
        colorScheme="red"
        variant="ghost"
        position="absolute"
        top="2px"
        right="2px"
        aria-label="Agregar a favoritos"
      />

      {/* Ubicación en la esquina inferior derecha de la imagen */}
      <Text
        position="absolute"
        bottom="130px" 
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
        <Button colorScheme="teal" mt="4" w="full" onClick={handleViewMore}>
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
      <AdoptionCard />
      <AdoptionCard />
      {/* Añadir más tarjetas aquí */}
    </Flex>
  );
}

export default CardContainer;
