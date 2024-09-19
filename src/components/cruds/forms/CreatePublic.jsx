import React, { useState } from 'react';
import {
  Box,
  VStack,
  Input,
  Textarea,
  Button,
  Text,
  RadioGroup,
  Radio,
  Stack,
  Select,
  CheckboxGroup,
  Checkbox,
  Icon,
  HStack,
  FormControl,
  FormLabel,
  Image,
} from '@chakra-ui/react';
import { FaPaw } from 'react-icons/fa'; // Ícono de huellitas

function CreatePublic() {
  const [pawRating, setPawRating] = useState(0); // Para controlar las huellitas seleccionadas
  const [mainImage, setMainImage] = useState(null); // Imagen principal
  const [additionalImages, setAdditionalImages] = useState([null, null, null]); // Imágenes adicionales
  const [formData, setFormData] = useState({
    title: '',
    sex: '',
    size: 0,
    personality: [],
    age: '',
    location: '',
    type: '',
    priority: '',
    description: '',
  });

  // Manejar los campos de texto
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejar la carga de la imagen principal
  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setMainImage(imageUrl);
    }
  };

  // Manejar la carga de imágenes adicionales
  const handleAdditionalImageChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const updatedImages = [...additionalImages];
      updatedImages[index] = imageUrl;
      setAdditionalImages(updatedImages);
    }
  };

  const handlePawClick = (index) => {
    setPawRating(index + 1);
    setFormData({
      ...formData,
      size: index + 1,
    });
  };

  const handleSubmit = () => {
    console.log('Formulario enviado:', formData);
    // Aquí podrías agregar la lógica para enviar los datos
  };

  return (
    <Box maxW="600px" mx="auto" mt={10} p={6} borderWidth="1px" borderRadius="lg" bg="white">
      <Text fontSize="2xl" fontWeight="bold" mb={6}>Crear Publicación</Text>
      <VStack spacing={4} align="stretch">

        {/* Imagen Principal */}
        <FormControl>
          <FormLabel>Imagen Principal o Portada</FormLabel>
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
            {mainImage ? (
              <Image src={mainImage} alt="Imagen Principal" boxSize="100%" objectFit="cover" />
            ) : (
              <Text color="gray.500">No hay imagen</Text>
            )}
          </Box>
          <Input type="file" accept="image/*" onChange={handleMainImageChange} />
        </FormControl>

        {/* Imágenes adicionales */}
        // ... (código anterior)

<FormControl>
  <FormLabel>Más Imágenes</FormLabel>
  <HStack spacing={4}>
    {additionalImages.map((image, index) => (
      <Box
        key={index}
        margin="auto"
        border="1px"
        borderColor="gray.300"
        borderRadius="md"
        w="80px" // Cambiado a 80px
        h="80px" // Cambiado a 80px
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="gray.100"
        position="relative" // Asegúrate de que la posición sea relativa
      >
        {image ? (
          <Image src={image} alt={`Imagen adicional ${index + 1}`} boxSize="100%" objectFit="cover" />
        ) : (
          <Text color="gray.500" fontSize="xs">Más imágenes</Text> // Cambiado a fontSize="xs"
        )}
        <Input
          type="file"
          accept="image/*"
          position="absolute"
          opacity="0"
          cursor="pointer"
          onChange={(e) => handleAdditionalImageChange(index, e)}
          width="100%" // Asegúrate de que el input cubra el cuadro
          height="100%" // Asegúrate de que el input cubra el cuadro
        />
      </Box>
    ))}
  </HStack>
</FormControl>




        {/* Título */}
        <FormControl>
          <FormLabel>Título</FormLabel>
          <Input
            placeholder="Título"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </FormControl>

        {/* Sexo */}
        <FormControl>
          <FormLabel>Sexo</FormLabel>
          <RadioGroup name="sex" onChange={handleInputChange}>
            <Stack direction="row">
              <Radio value="Macho">Macho</Radio>
              <Radio value="Hembra">Hembra</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        {/* Tamaño (Huellitas) */}
        <FormControl>
          <FormLabel>Tamaño</FormLabel>
          <HStack spacing={2}>
            {Array(5)
              .fill('')
              .map((_, index) => (
                <Icon
                  key={index}
                  as={FaPaw}
                  boxSize={8}
                  color={index < pawRating ? 'teal.500' : 'gray.300'}
                  cursor="pointer"
                  onClick={() => handlePawClick(index)}
                />
              ))}
          </HStack>
        </FormControl>

        {/* Personalidad */}
        <FormControl>
          <FormLabel>Personalidad</FormLabel>
          <CheckboxGroup onChange={handleInputChange}>
            <Stack direction="column">
              <Checkbox value="Cariñoso">Cariñoso</Checkbox>
              <Checkbox value="Juguetón">Juguetón</Checkbox>
              <Checkbox value="Tranquilo">Tranquilo</Checkbox>
              <Checkbox value="Protector">Protector</Checkbox>
              <Checkbox value="Independiente">Independiente</Checkbox>
            </Stack>
          </CheckboxGroup>
        </FormControl>

        {/* Año o Edad */}
        <FormControl>
          <FormLabel>Año o Edad</FormLabel>
          <Input
            type="number"
            placeholder="Edad en años"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </FormControl>

        {/* Ubicación */}
        <FormControl>
          <FormLabel>Ubicación</FormLabel>
          <Select name="location" value={formData.location} onChange={handleInputChange}>
            <option value="Talitas">Talitas</option>
            <option value="San Miguel de Tucumán">San Miguel de Tucumán</option>
          </Select>
        </FormControl>

        {/* Tipo de Animal */}
        <FormControl>
          <FormLabel>Tipo de Animal</FormLabel>
          <Select name="type" value={formData.type} onChange={handleInputChange}>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
          </Select>
        </FormControl>

        {/* Prioridad */}
        <FormControl>
          <FormLabel>Prioridad</FormLabel>
          <RadioGroup name="priority" onChange={handleInputChange}>
            <Stack direction="row">
              <Radio value="Urgente">Urgente</Radio>
              <Radio value="Normal">Normal</Radio>
              <Radio value="Baja">Baja</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        {/* Descripción */}
        <FormControl>
          <FormLabel>Descripción</FormLabel>
          <Textarea
            placeholder="Agrega una descripción"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </FormControl>

        {/* Botón para enviar */}
        <Button colorScheme="teal" onClick={handleSubmit}>Publicar</Button>
      </VStack>
    </Box>
  );
}

export default CreatePublic;
