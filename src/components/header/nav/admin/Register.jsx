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
  Select,
  Checkbox,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';

function RegisterModal({ isOpen, onClose }) {
  const toast = useToast();
  const [isAdult, setIsAdult] = React.useState(false);

  const handleSubmit = () => {
    if (!isAdult) {
      toast({
        title: 'Error',
        description: 'Debes confirmar que eres mayor de 18 años.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    // Lógica para el registro (ej. enviar datos al servidor)
    onClose();
    toast({
      title: 'Éxito',
      description: 'Registro completado con éxito.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Crear cuenta</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4} align="stretch">
            <Input placeholder="Nombre" />
            <Input placeholder="Apellido" />
            <Input placeholder="Teléfono" type="tel" />
            <Input placeholder="Correo electrónico" type="email" />
            
            <Select placeholder="Ubicación">
              <option value="san-miguel">San Miguel de Tucumán</option>
              <option value="talitas">Talitas</option>
            </Select>

            <Checkbox
              isChecked={isAdult}
              onChange={(e) => setIsAdult(e.target.checked)}
            >
              Soy mayor de 18 años
            </Checkbox>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="teal" width="full" onClick={handleSubmit}>
            Continuar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default RegisterModal;
