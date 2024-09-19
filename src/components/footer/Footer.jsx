import { Box, Flex, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Link, Image } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="#FF6533" color="#533E5B" py={6}>
      <Flex direction="column" align="center" justify="center" textAlign="center" w="full" maxW="md" mx="auto">
        <Accordion allowMultiple w="full">
          {/* Apartado de "Sobre Nosotros" */}
          <AccordionItem border="none">
            <h2>
              <AccordionButton _expanded={{ bg: "#FF6533" }} justifyContent="center">
                <Box flex="1" textAlign="center">
                  Sobre Nosotros
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel color="white" pb={4}>
              
              <Link 
                href="/blog" 
                color="#533E5B"   // El color del título "Sobre Nosotros"
                textDecoration="none" 
                _hover={{ textDecoration: "none" }} 
                mt={4}
                fontWeight="300"  // Fuente más fina
              >
                Blog
              </Link>
            </AccordionPanel>
          </AccordionItem>

          {/* Apartado de "Contactanos" */}
          <AccordionItem border="none">
            <h2>
              <AccordionButton _expanded={{ bg: "#FF6533" }} justifyContent="center">
                <Box flex="1" textAlign="center">
                  Contactanos
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel color="#533E5B" pb={4}>  {/* Letras con el mismo color que el título */}
              <Text>
                Atención Telefónica: <br />
                0810-220-2345
              </Text>
              <Text mt={2}>
                Atención Whatsapp: <br />
                +54-911-6702-6320
              </Text>
              <Text mt={2}>
                Lunes a Sábados de 9 a 21 hs <br />
                Domingos de 10 a 20 hs
              </Text>
            </AccordionPanel>
          </AccordionItem>

          {/* Apartado de "Servicio" */}
          <AccordionItem border="none">
            <h2>
              <AccordionButton _expanded={{ bg: "#FF6533" }} justifyContent="center">
                <Box flex="1" textAlign="center">
                  Servicio
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel color="#533E5B" pb={4}>  {/* Mismo estilo que Contacto */}
              <Link 
                href="/adopciones" 
                color="#533E5B" 
                textDecoration="none" 
                _hover={{ textDecoration: "none" }} 
                fontWeight="300"  // Fuente más fina
                display="block"
              >
                Adopciones
              </Link>
              <Link 
                href="/perdidos" 
                color="#533E5B" 
                textDecoration="none" 
                _hover={{ textDecoration: "none" }} 
                fontWeight="300"  
                display="block"
                mt={2}
              >
                Perdidos
              </Link>
              <Link 
                href="/requisitos" 
                color="#533E5B" 
                textDecoration="none" 
                _hover={{ textDecoration: "none" }} 
                fontWeight="300"  
                display="block"
                mt={2}
              >
                Requisitos
              </Link>
            </AccordionPanel>
          </AccordionItem>

          {/* Apartado de "Ayuda" */}
          <AccordionItem border="none">
            <h2>
              <AccordionButton _expanded={{ bg: "#FF6533" }} justifyContent="center">
                <Box flex="1" textAlign="center">
                  Ayuda
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel color="white" pb={4}>
              <Text>
                Encuentra respuestas a preguntas frecuentes o comunícate con nuestro equipo de soporte.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Box mt={8}>
          <Image src="Imagen de WhatsApp 2024-09-18 a las 02.57.19_dc1fas50c15.jpg" alt="Logo Adopta un Amigo" />
        </Box>

        <Text fontSize="sm" mt={4}>© 2024 Adopta un Amigo</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
