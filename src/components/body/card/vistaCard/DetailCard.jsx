import { Box, Image, Text, Button, HStack, SimpleGrid, GridItem, Icon } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { FaPaw } from 'react-icons/fa';
import { useParams } from 'react-router-dom';  // Importa useParams
import { getAdoptions } from '../../../services/api';

function AnimalDetails() {
  const { id } = useParams(); // Obtén el id de la URL
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPaw, setSelectedPaw] = useState(2);
  const [animalData, setAnimalData] = useState(null);

  useEffect(() => {
    const fetchAdoption = async () => {
      try {
        const adoption = await getAdoptions();
        console.log('Datos de adopción:', adoption);

        // Encuentra el animal con el id correspondiente
        const selectedAnimal = adoption.find((animal) => animal.id === parseInt(id));

        if (selectedAnimal) {
          setAnimalData(selectedAnimal);
          if (selectedAnimal.imagesAdoptions && selectedAnimal.imagesAdoptions.length > 0) {
            setSelectedImage(selectedAnimal.imagesAdoptions[0].url); // Asume que la URL de la imagen está en `url`
          }
        } else {
          console.error("No se encontró el animal con este ID.");
        }
      } catch (error) {
        console.error('Error al obtener los datos de adopción:', error);
      }
    };
    fetchAdoption();
  }, [id]);  // Ahora el hook depende del id para obtener los datos correspondientes.

  if (!animalData) {
    return <Text>Cargando...</Text>;
  }

  const images = animalData?.imagesAdoptions || [];

  return (
    <Box maxW="md" mx="auto" p="6" boxShadow="lg" borderRadius="lg" bg="white">
      <Image
        src={selectedImage}
        alt="Imagen principal del animal"
        width="400px"
        height="300px"
        objectFit="cover"
        borderRadius="md"
        mx="auto"
      />

      <HStack mt="4" spacing="4" justify="center">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img.url}  // Asume que `url` es el campo de imagen
            alt={`Imagen ${index + 1}`}
            width="75px"
            height="75px"
            objectFit="cover"
            cursor="pointer"
            borderRadius="md"
            border={selectedImage === img.url ? "2px solid teal" : "1px solid gray"}
            onClick={() => setSelectedImage(img.url)}
          />
        ))}
      </HStack>

      <Text fontWeight="bold" fontSize="2xl" mt="4" textAlign="center">
        {animalData?.title || 'Perritos en Adopción'}
      </Text>

      <SimpleGrid columns={2} spacing={4} mt={4} justifyItems="center">
        <GridItem>
          <Text fontWeight="bold" textAlign="center">Sexo</Text>
          <Text textAlign="center">{animalData.gender?.name || 'Desconocido'}</Text>
        </GridItem>
        
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
                  onClick={() => setSelectedPaw(index)}
                />
              ))}
          </HStack>
        </GridItem>

        <GridItem>
          <Text fontWeight="bold" textAlign="center">Personalidad</Text>
          <Text textAlign="center">{animalData.personality?.name || 'Desconocida'}</Text>
        </GridItem>
        
        <GridItem>
          <Text fontWeight="bold" textAlign="center">Mes</Text>
          <Text textAlign="center">{animalData.month?.name || 'Desconocido'}</Text>
        </GridItem>

        <GridItem>
          <Text fontWeight="bold" textAlign="center">Ubicación</Text>
          <Text textAlign="center">
            {typeof animalData.location === 'string' ? animalData.location : 'Desconocida'}
          </Text>
        </GridItem>
        
        <GridItem>
          <Text fontWeight="bold" textAlign="center">Tipo de Animal</Text>
          <Text textAlign="center">{animalData.animalType?.name || 'Desconocido'}</Text>
        </GridItem>

        <GridItem colSpan={2}>
          <Text fontWeight="bold" textAlign="center">Prioridad</Text>
          <Text textAlign="center">{animalData.priority?.name || 'Normal'}</Text>
        </GridItem>

        <GridItem colSpan={2}>
          <Text textAlign="center" mx="10px" mt="4">
            {animalData?.description || 'Descripción no disponible'}
          </Text>
        </GridItem>
      </SimpleGrid>

      <Button colorScheme="orange" size="lg" mt="6" w="full">
        Adoptar
      </Button>
    </Box>
  );
}

export default AnimalDetails;
