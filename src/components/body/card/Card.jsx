import React, { useEffect, useState } from 'react';
import { Box, Image, Text, IconButton, Button, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  // Importa axios
import HeartButton from './HeartButton'; // Asegúrate de que la ruta sea correcta

function AdoptionCard() {
  const navigate = useNavigate();
  const [adoption, setAdoption] = useState(null); // Para almacenar los datos de adopción

  // Cargar datos de la API
  useEffect(() => {
    const fetchAdoptionData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/adoptions'); // Reemplaza con tu URL real
        setAdoption(response.data[0]); // Suponiendo que deseas la primera adopción
      } catch (error) {
        console.error("Error fetching adoption data", error);
      }
    };

    fetchAdoptionData();
  }, []);

  const handleViewMore = () => {
    navigate('/details');
  };

  if (!adoption) {
    return <Text>Cargando...</Text>; // Muestra un mensaje mientras los datos se cargan
  }

  return (
    <Box
      maxW="400px"
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
        src={adoption.imagesAdoptions?.[0]?.url || "default-image.jpg"} // Usa la URL de la primera imagen
        alt={adoption.animalType?.name || "Perrito en adopción"}
        objectFit="cover"
        width="400px"
        height="350px"
      />

      {/* Corazón para agregar a favoritos */}
      <Box position="absolute" top="2" right="2">
        <HeartButton />
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
        {adoption.location || "Ubicación desconocida"}
      </Text>

      {/* Título y detalles de la mascota */}
      <Box p="4">
        <Text fontWeight="bold" fontSize="xl" mb="2" textAlign="center">
          {adoption.animalType?.name || "Perritos en Adopción"}
        </Text>
        <Text fontSize="md" mb="2" textAlign="center">
          {adoption.gender?.name || "Sexo desconocido"}
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