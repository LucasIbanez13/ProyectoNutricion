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
        <Text my={4}>Se ha perdido un perro de raza pequeña. Por favor, si lo ven, contactarse.</Text>
        <Image src="https://via.placeholder.com/400x300?text=Medidas" alt="Medidas del animal" borderRadius="md" mb={4} />
        
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
        <Text my={4}>Se ha perdido un perro de raza pequeña. Por favor, si lo ven, contactarse.</Text>
        <Image src="https://via.placeholder.com/400x300?text=Medidas" alt="Medidas del animal" borderRadius="md" mb={4} />
        
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
