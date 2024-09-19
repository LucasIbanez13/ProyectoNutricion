import React, { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  Input,
  Textarea,
  Button,
  Text,
  FormControl,
  FormLabel,
  Image,
} from '@chakra-ui/react';

function CreatePerdidos() {
  const [image, setImage] = useState(null);
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setDate(currentDate);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Formulario de perdido enviado:', { description, image });
  };

  return (
    <Box maxW="600px" mx="auto" mt={10} p={6} borderWidth="1px" borderRadius="lg" bg="white">
      <Text fontSize="2xl" fontWeight="bold" mb={6}>Publicar Animal Perdido</Text>
      <VStack spacing={4} align="stretch">

        <FormControl>
          <FormLabel>Nombre</FormLabel>
          <Text fontSize="lg" fontWeight="bold">Lucas Ibañez</Text>
        </FormControl>

        <FormControl>
          <FormLabel>Fecha</FormLabel>
          <Text fontSize="sm" color="gray.500">{date}</Text>
        </FormControl>

        <FormControl>
          <FormLabel>Descripción</FormLabel>
          <Textarea
            placeholder="Descripción del animal perdido"
            value={description}
            onChange={handleDescriptionChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Imagen del Animal</FormLabel>
          <Box
            border="1px"
            borderColor="gray.300"
            borderRadius="md"
            w="100%"
            h="200px"
            mb={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="gray.100"
          >
            {image ? (
              <Image src={image} alt="Imagen del animal" boxSize="100%" objectFit="cover" />
            ) : (
              <Text color="gray.500">No hay imagen</Text>
            )}
          </Box>
          <Input type="file" accept="image/*" onChange={handleImageChange} />
        </FormControl>

        <Button colorScheme="teal" onClick={handleSubmit}>Publicar Perdido</Button>
      </VStack>
    </Box>
  );
}

export default CreatePerdidos;
