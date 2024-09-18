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

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      {/* Contenedor para posicionar el botón en la parte superior derecha */}
      <Box position="absolute" top="10px" right="10px">
        <Button
          ref={btnRef}
          colorScheme='teal'
          onClick={onOpen}
        >
          X
        </Button>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>TuCMascota</DrawerHeader>

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
                <Button colorScheme='teal' onClick={onClose}>
                  Ingresar
                </Button>
                <Button colorScheme='teal' variant='outline' onClick={onClose}>
                  Crear tu cuenta
                </Button>
              </HStack>

              {/* Botones de navegación */}
              <VStack spacing={4} align="stretch">
                <Button colorScheme='teal' onClick={onClose}>Inicio</Button>
                <Button colorScheme='teal' onClick={onClose}>Adoptar</Button>
                <Button colorScheme='teal' onClick={onClose}>Perdidos</Button>
              </VStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerExample;
