import { Box, Image, Text, Button, HStack, SimpleGrid, GridItem, Icon } from '@chakra-ui/react';
import { useState } from 'react';
import { FaPaw } from 'react-icons/fa'; // Importar el ícono de huellitas

function AnimalDetails() {
  const [selectedImage, setSelectedImage] = useState("Imagen de WhatsApp 2024-09-21 a las 18.55.50_6051d243.jpg");
  const [selectedPaw, setSelectedPaw] = useState(2); // Huella del medio seleccionada por defecto

  const images = [
    "Imagen de WhatsApp 2024-09-21 a las 18.55.50_6051d243.jpg",
    "Imagen de WhatsApp 2024-09-21 a las 18.55.50_167189d3.jpg",
    "Imagen de WhatsApp 2024-09-21 a las 18.55.50_6051d243.jpg",
    "Imagen de WhatsApp 2024-09-21 a las 18.55.50_167189d3.jpg",
  ];

  const handlePawClick = (index) => {
    setSelectedPaw(index); // Actualiza la huella seleccionada
  };

  return (
    <Box maxW="md" mx="auto" p="6" boxShadow="lg" borderRadius="lg" bg="white">
      {/* Imagen principal con tamaño fijo de 400x250 */}
      <Image
        src={selectedImage}
        alt="Imagen principal del animal"
        width="400px"  // Tamaño fijo
        height="300px" // Tamaño fijo
        objectFit="cover"
        borderRadius="md"
        mx="auto"      // Para centrar horizontalmente
      />

      {/* Carrusel de imágenes pequeñas con tamaño fijo */}
      <HStack mt="4" spacing="4" justify="center">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Imagen ${index + 1}`}
            width="75px"  // Tamaño fijo
            height="75px" // Tamaño fijo
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
          <Text textAlign="center">Macho</Text>
        </GridItem>

        {/* Reemplazo de "Tamaño" por huellitas */}
        <GridItem>
          <Text fontWeight="bold" textAlign="center">Tamaño</Text>
          <HStack justify="center" mt={2}>
            {Array(5)
              .fill('')
              .map((_, index) => (
                <Icon
                  key={index}
                  as={FaPaw}
                  boxSize={6}
                  color={index <= selectedPaw ? 'teal.500' : 'gray.300'}
                  cursor="pointer"
                  onClick={() => handlePawClick(index)} // Cambiar la selección al hacer clic
                />
              ))}
          </HStack>
        </GridItem>

        <GridItem>
          <Text fontWeight="bold" textAlign="center">Personalidad</Text>
          <Text textAlign="center">Juguetón, Cariñoso, Protector</Text>
        </GridItem>
        <GridItem>
          <Text fontWeight="bold" textAlign="center">Mes</Text>
          <Text textAlign="center">1</Text>
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
      <Button colorScheme="orange" size="lg" mt="6" w="full">
        Adoptar
      </Button>
    </Box>
  );
}

export default AnimalDetails;
