import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  VStack,
  HStack,
  Box,
  Avatar,
  Text,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import LoginModal from './admin/Login'; // Importa el componente del modal de login
import RegisterModal from './admin/Register'; // Importa el componente del modal de registro

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Controla el Drawer
  const { isOpen: isLoginOpen, onOpen: onLoginOpen, onClose: onLoginClose } = useDisclosure(); // Controla el modal de login
  const { isOpen: isRegisterOpen, onOpen: onRegisterOpen, onClose: onRegisterClose } = useDisclosure(); // Controla el modal de registro
  const btnRef = React.useRef();

  const handleLoginClick = () => {
    onClose(); // Cierra el Drawer
    onLoginOpen(); // Abre el modal de login
  };

  const handleRegisterClick = () => {
    onClose(); // Cierra el Drawer
    onRegisterOpen(); // Abre el modal de registro
  };

  return (
    <>
      <Box position="absolute" top="10px" right="10px">
        <Button
          ref={btnRef}
          fontSize="27px"
          colorScheme="#FF6533"
          onClick={onOpen}
        >
          <FaBars />
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
              <Flex align="center" mb={4}>
                <Avatar name="User Avatar" src="/path/to/avatar.jpg" size="lg" />
                <Box ml={4}>
                  <Text fontSize="lg" fontWeight="bold">Bienvenido</Text>
                  <Text>Ingresa a tu cuenta</Text>
                </Box>
              </Flex>

              <HStack spacing={4} mb={4}>
                <Button colorScheme="teal" onClick={handleLoginClick}>
                  Ingresar
                </Button>
                <Button colorScheme="teal" variant="outline" onClick={handleRegisterClick}>
                  Crear tu cuenta
                </Button>
              </HStack>

              <VStack spacing={4} align="stretch">
                <Button colorScheme="teal" onClick={onClose}>Inicio</Button>
                <Button colorScheme="teal" onClick={onClose}>Adoptar</Button>
                <Button colorScheme="teal" onClick={onClose}>Perdidos</Button>
              </VStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Modales */}
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} onOpenRegister={onRegisterOpen} />
      <RegisterModal isOpen={isRegisterOpen} onClose={onRegisterClose} />
    </>
  );
}

export default DrawerExample;
