import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  VStack,
  Text,
  Icon,
} from '@chakra-ui/react';
import { FaGoogle } from 'react-icons/fa';

function LoginModal({ isOpen, onClose, onOpenRegister }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Iniciar sesión</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4} align="stretch">
            <Input placeholder="Correo electrónico" type="email" />
            <Input placeholder="Contraseña" type="password" />
          </VStack>

          <Button
            mt={4}
            colorScheme="red"
            width="full"
            leftIcon={<Icon as={FaGoogle} />}
            onClick={() => alert('Iniciar sesión con Google')}
          >
            Iniciar sesión con Google
          </Button>

          <Text mt={4} textAlign="center">
            ¿No tienes cuenta?{' '}
            <Button variant="link" colorScheme="blue" onClick={onOpenRegister}>
              Crea tu cuenta
            </Button>
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="teal" width="full" onClick={() => alert('Iniciar sesión')}>
            Ingresar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default LoginModal;
