// CardContainer.js
import React, { useEffect, useState } from 'react';
import { Box, Image, Text, Button, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { getAdoptions } from '../../services/api'; // Importa la función desde tu archivo API

function CardContainer() {
  const navigate = useNavigate();
  const [adoptions, setAdoptions] = useState([]);

  // Obtén todos los datos de adopción al cargar el componente
  useEffect(() => {
    const fetchAdoptions = async () => {
      try {
        const data = await getAdoptions();
        setAdoptions(data);
      } catch (error) {
        console.error('Error al cargar los datos de adopción:', error);
      }
    };

    fetchAdoptions();
  }, []);

  const handleViewMore = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <Flex direction="row" wrap="wrap" justify="center" p={4}>
      {adoptions.map((adoption) => (
        <Box
          key={adoption.id}
          maxW="400px"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="md"
          position="relative"
          bg="white"
          mb="4"
          m="2"
        >
          <Image
            src={adoption.imagesAdoptions?.[0]?.url || "default-image.jpg"}
            alt={adoption.animalType?.name || "Animal en adopción"}
            objectFit="cover"
            width="400px"
            height="350px"
          />

          <Box p="4">
            <Text fontWeight="bold" fontSize="xl" mb="2" textAlign="center">
              {adoption.animalType?.name || "Adopción"}
            </Text>
            <Text fontSize="md" mb="2" textAlign="center">
              {adoption.gender?.name || "Sexo desconocido"}
            </Text>

            <Button colorScheme="orange" mt="4" w="full" onClick={() => handleViewMore(adoption.id)}>
              Ver más
            </Button>
          </Box>
        </Box>
      ))}
    </Flex>
  );
}

export default CardContainer;
