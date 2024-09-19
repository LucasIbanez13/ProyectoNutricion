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
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import LoginModal from './admin/Login';
import RegisterModal from './admin/Register';

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isLoginOpen, onOpen: onLoginOpen, onClose: onLoginClose } = useDisclosure();
  const { isOpen: isRegisterOpen, onOpen: onRegisterOpen, onClose: onRegisterClose } = useDisclosure();
  const btnRef = React.useRef();
  const navigate = useNavigate(); // Hook para navegar entre rutas

  const handleLoginClick = () => {
    onClose();
    onLoginOpen();
  };

  const handleRegisterClick = () => {
    onClose();
    onRegisterOpen();
  };

  const handleHomeClick = () => {
    onClose(); // Cierra el Drawer
    navigate('/'); // Navega a la página de inicio
  };

  const handleLostAnimalsClick = () => {
    onClose(); // Cierra el Drawer
    navigate('/perdidos'); // Navega a la ruta de animales perdidos
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
                <Button colorScheme="teal" onClick={handleHomeClick}>Inicio</Button> {/* Cambia la ruta a "/" */}
                <Button colorScheme="teal" onClick={onClose}>Adoptar</Button>
                <Button colorScheme="teal" onClick={handleLostAnimalsClick}>Perdidos</Button> {/* Cambia la ruta a "/perdidos" */}
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
