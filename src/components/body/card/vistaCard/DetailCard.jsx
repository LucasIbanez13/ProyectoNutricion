import { Box, Image, Text, Table, Tr, Td, Tbody, Button, SimpleGrid, HStack } from '@chakra-ui/react';
import { useState } from 'react';

function AnimalDetails() {
  const [selectedImage, setSelectedImage] = useState("https://via.placeholder.com/400x250");

  const images = [
    "https://via.placeholder.com/400x250",
    "https://via.placeholder.com/400x250/0000FF",
    "https://via.placeholder.com/400x250/FF0000",
    "https://via.placeholder.com/400x250/00FF00"
  ];

  return (
    <Box maxW="lg" mx="auto" p="4" boxShadow="lg" borderRadius="lg" bg="white">
      {/* Imagen principal */}
      <Image src={selectedImage} alt="Imagen principal del animal" w="full" h="300px" objectFit="cover" borderRadius="md" />

      {/* Carrusel de imágenes pequeñas */}
      <HStack mt="4" spacing="4" justify="center">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Imagen ${index + 1}`}
            w="75px"
            h="75px"
            objectFit="cover"
            cursor="pointer"
            borderRadius="md"
            border={selectedImage === img ? "2px solid teal" : "1px solid gray"}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </HStack>

      {/* Título */}
      <Text fontWeight="bold" fontSize="2xl" mt="4" textAlign="center">
        Perritos en Adopción
      </Text>

      {/* Tabla con información del animal */}
      <Table variant="simple" mt="4">
        <Tbody>
          <Tr>
            <Td fontWeight="bold">Sexo</Td>
            <Td>Macho/Hembra</Td>
          </Tr>
          <Tr>
            <Td fontWeight="bold">Tamaño</Td>
            <Td>Mediano</Td>
          </Tr>
          <Tr>
            <Td fontWeight="bold">Personalidad</Td>
            <Td>Juguetón, cariñoso</Td>
          </Tr>
          <Tr>
            <Td fontWeight="bold">Año</Td>
            <Td>2022</Td>
          </Tr>
          <Tr>
            <Td fontWeight="bold">Ubicación</Td>
            <Td>Talitas / Tucumán</Td>
          </Tr>
          <Tr>
            <Td fontWeight="bold">Tipo de Animal</Td>
            <Td>Perro</Td>
          </Tr>
          <Tr>
            <Td fontWeight="bold">Prioridad</Td>
            <Td>Urgente</Td>
          </Tr>
          <Tr>
            <Td fontWeight="bold">Descripción</Td>
            <Td>Es un perrito muy amigable que está buscando un hogar amoroso.</Td>
          </Tr>
        </Tbody>
      </Table>

      {/* Botón para Adoptar */}
      <Button colorScheme="teal" size="lg" mt="6" w="full">
        Adoptar
      </Button>
    </Box>
  );
}

export default AnimalDetails;
