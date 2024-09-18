import { Box, Image, Text, Button, HStack, SimpleGrid, GridItem } from '@chakra-ui/react';
import { useState } from 'react';

function AnimalDetails() {
  const [selectedImage, setSelectedImage] = useState("https://via.placeholder.com/400x250");

  const images = [
    "https://via.placeholder.com/400x250",
    "https://via.placeholder.com/400x250",
    "https://via.placeholder.com/400x250",
    "https://via.placeholder.com/400x250"
  ];

  return (
    <Box maxW="md" mx="auto" p="6" boxShadow="lg" borderRadius="lg" bg="white">
     
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

      {/* Información del animal con grid centrado */}
      <SimpleGrid columns={2} spacing={4} mt={4} justifyItems="center">
        <GridItem>
          <Text fontWeight="bold" textAlign="center">Sexo</Text>
          <Text textAlign="center">Macho/Hembra</Text>
        </GridItem>
        <GridItem>
          <Text fontWeight="bold" textAlign="center">Tamaño</Text>
          <Text textAlign="center">Mediano</Text>
        </GridItem>

        <GridItem>
          <Text fontWeight="bold" textAlign="center">Personalidad</Text>
          <Text textAlign="center">Juguetón, cariñoso</Text>
        </GridItem>
        <GridItem>
          <Text fontWeight="bold" textAlign="center">Año</Text>
          <Text textAlign="center">2022</Text>
        </GridItem>

        <GridItem>
          <Text fontWeight="bold" textAlign="center">Ubicación</Text>
          <Text textAlign="center">Talitas / Tucumán</Text>
        </GridItem>
        <GridItem>
          <Text fontWeight="bold" textAlign="center">Tipo de Animal</Text>
          <Text textAlign="center">Perro</Text>
        </GridItem>

        {/* Prioridad en una fila */}
        <GridItem colSpan={2}>
          <Text fontWeight="bold" textAlign="center">Prioridad</Text>
          <Text textAlign="center">Urgente</Text>
        </GridItem>

        {/* Descripción con centrado y márgenes laterales */}
        <GridItem colSpan={2}>
          <Text textAlign="center" mx="10px" mt="4">
            Es un perrito muy amigable que está buscando un hogar amoroso.
          </Text>
        </GridItem>
      </SimpleGrid>

      {/* Botón para Adoptar */}
      <Button colorScheme="teal" size="lg" mt="6" w="full">
        Adoptar
      </Button>
    </Box>
  );
}

export default AnimalDetails;
