import React from 'react';
import { Box, VStack, Text, Icon, Flex } from '@chakra-ui/react';
import { FaPen, FaPaw } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

function Publicar() {
  const navigate = useNavigate(); // Hook para navegar entre rutas

  const handlePublishClick = () => {
    navigate('/createPublic'); // Navega a la ruta del formulario para publicar
  };

  const handlePerdidoClick = () => {
    navigate('/createPerdidos'); // Navega a la ruta del formulario para perdidos
  };

  return (
    <Flex direction="column" align="center" justify="center" minH="50vh" p={4} bg="gray.100">
      <Text fontSize="3xl" fontWeight="bold" mb={6} color="teal.600">¿Qué quieres hacer?</Text>
      
      <VStack spacing={8} align="stretch">
        <Flex
          direction="column"
          align="center"
          justify="center"
          borderWidth="1px"
          borderRadius="lg"
          p={8}
          w="100%"
          maxW="300px"
          bg="white"
          boxShadow="md"
          cursor="pointer"
          onClick={handlePublishClick} // Maneja el clic para navegar a "Publicar"
          _hover={{ boxShadow: 'xl', transform: 'scale(1.05)' }}
          transition="all 0.2s ease-in-out"
        >
          <Icon as={FaPen} boxSize={12} color="blue.500" />
          <Text mt={4} fontSize="lg" fontWeight="bold">Publicar</Text>
        </Flex>

        <Flex
          direction="column"
          align="center"
          justify="center"
          borderWidth="1px"
          borderRadius="lg"
          p={8}
          w="100%"
          maxW="300px"
          bg="white"
          boxShadow="md"
          cursor="pointer"
          onClick={handlePerdidoClick} // Maneja el clic para navegar a "Perdido"
          _hover={{ boxShadow: 'xl', transform: 'scale(1.05)' }}
          transition="all 0.2s ease-in-out"
        >
          <Icon as={FaPaw} boxSize={12} color="red.500" />
          <Text mt={4} fontSize="lg" fontWeight="bold">Perdido</Text>
        </Flex>
      </VStack>
    </Flex>
  );
}

export default Publicar;
