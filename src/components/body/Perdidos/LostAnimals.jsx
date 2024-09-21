import React from 'react';
import { Box, Text, Image, HStack, IconButton } from '@chakra-ui/react';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';

function LostAnimals() {
  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={6}>Animales Perdidos</Text>
      
      <Box borderWidth="1px" borderRadius="lg" p={4} mb={6}>
        <Text fontSize="lg" fontWeight="bold">Lucas Ibañez</Text>
        <Text fontSize="sm" color="gray.500">19 de Septiembre de 2024</Text>
        <Text my={4}>Se ha perdido un perro de raza mediana. Por favor, si lo ven, contactarse.</Text>
        <Image 
          src="Sobrepeso-en-perros-causas-y-consecuencias.jpeg" 
          alt="Medidas del animal" 
          borderRadius="md" 
          mb={4}
          boxSize="400px"
          objectFit="cover" // Asegura que la imagen mantenga las proporciones dentro del tamaño especificado
        />
        
        <HStack spacing={6}>
          <IconButton
            icon={<FaHeart />}
            colorScheme="pink"
            aria-label="Me gusta"
            variant="outline"
          />
          <IconButton
            icon={<FaComment />}
            colorScheme="teal"
            aria-label="Comentar"
            variant="outline"
          />
          <IconButton
            icon={<FaShare />}
            colorScheme="blue"
            aria-label="Compartir"
            variant="outline"
          />
        </HStack>
      </Box>

      <Box borderWidth="1px" borderRadius="lg" p={4} mb={6}>
        <Text fontSize="lg" fontWeight="bold">Gabriel Ibañez</Text>
        <Text fontSize="sm" color="gray.500">15 de Septiembre de 2024</Text>
        <Text my={4}>Se ha perdido un perro de raza grande. Por favor, si lo ven, contactarse.</Text>
        <Image 
          src="5-razas-populares-perros-labrador-pastor-aleman.webp" 
          alt="Medidas del animal" 
          borderRadius="md" 
          mb={4}
          boxSize="400px"
          objectFit="cover" // Ajusta la imagen para llenar el tamaño definido
        />
        
        <HStack spacing={6}>
          <IconButton
            icon={<FaHeart />}
            colorScheme="pink"
            aria-label="Me gusta"
            variant="outline"
          />
          <IconButton
            icon={<FaComment />}
            colorScheme="teal"
            aria-label="Comentar"
            variant="outline"
          />
          <IconButton
            icon={<FaShare />}
            colorScheme="blue"
            aria-label="Compartir"
            variant="outline"
          />
        </HStack>
      </Box>

    </Box>
  );
}

export default LostAnimals;
