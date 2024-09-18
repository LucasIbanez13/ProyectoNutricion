import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
  Box,
  Avatar,
  Text,
  Flex,
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa'; // Importa el icono de tres barritas desde react-icons

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  // Función para redirigir al inicio
  const redirectToHome = () => {
    window.location.href = "/"; // Redirige a la página de inicio
  };

  return (
    <>
      {/* Contenedor para posicionar el botón en la parte superior derecha */}
      <Box position="absolute" top="10px" right="10px">
        <Button
          ref={btnRef}
          fontSize="27px"
          colorScheme="#FF6533"
          onClick={onOpen}
        >
          <FaBars /> {/* Icono de menú de tres barritas */}
        </Button>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Huellitas a la obra</DrawerHeader>

          <DrawerBody>
            <VStack spacing={6} align="stretch">
              {/* Sección de perfil */}
              <Flex align="center" mb={4}>
                <Avatar name="User Avatar" src="/path/to/avatar.jpg" size="lg" />
                <Box ml={4}>
                  <Text fontSize="lg" fontWeight="bold">Bienvenido</Text>
                  <Text>Ingresa a tu cuenta</Text>
                </Box>
              </Flex>

              {/* Botones para ingresar y crear cuenta */}
              <HStack spacing={4} mb={4}>
                <Button colorScheme="teal" onClick={onClose}>
                  Ingresar
                </Button>
                <Button colorScheme="teal" variant="outline" onClick={onClose}>
                  Crear tu cuenta
                </Button>
              </HStack>

              {/* Botones de navegación */}
              <VStack spacing={4} align="stretch">
                {/* Redirige a la página de inicio */}
                <Button colorScheme="teal" onClick={redirectToHome}>Inicio</Button>
                <Button colorScheme="teal" onClick={onClose}>Adoptar</Button>
                <Button colorScheme="teal" onClick={onClose}>Perdidos</Button>
              </VStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerExample;
