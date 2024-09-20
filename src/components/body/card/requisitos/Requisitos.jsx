import { useState } from "react";
import { Box, Image, Text, List, ListItem, Flex, Button, Collapse, Icon } from "@chakra-ui/react";
import { FaPaw } from "react-icons/fa"; // Importa el ícono de huella de perro

const AdoptionRequirements = () => {
  const [showMore, setShowMore] = useState(false); // Estado para controlar el despliegue de información adicional

  const handleToggle = () => setShowMore(!showMore); // Cambiar estado al hacer clic en el botón

  return (
    <Box as="section" bg="gray.100" py={10} textAlign="center">
      <Image
        src="orange.jpg"
        alt="Mascota"
        mx="auto"
        borderRadius="lg"
        boxShadow="lg"
        mb={5}
        maxWidth="100%"
      />
      <Text color="#533E5B" fontSize="2xl" fontWeight="bold" mb={4}>
        REQUISITOS PARA ADOPTAR
      </Text>
      <List spacing={5} textAlign="left" mx="auto" maxWidth="400px">
        {[
          "Ser mayor de 21 años.",
          "Amar a las mascotas y poder dedicarle el tiempo que necesite.",
          "Querer sumar un integrante a tu vida por el resto de la suya, sin importar los cambios que se presenten.",
          "Estar bien predispuesto: te pedimos cargues tu solicitud, realices una entrevista con el especialista y respondas a nuestro contacto.",
          "Comprometerse con el cuidado, la salud y la castración de la mascota.",
        ].map((requisito, index) => (
          <ListItem key={index}>
            <Flex align="center">
              <Box
                bg="#533E5B"
                color="white"
                borderRadius="full"
                width="40px"   /* Tamaño fijo */
                height="40px"  /* Tamaño fijo */
                display="flex"
                justifyContent="center"
                alignItems="center"
                fontWeight="bold"
                fontSize="md"
                mr={7}
                flexShrink={0} // Evita que el contenedor se reduzca
              >
                <Icon as={FaPaw} boxSize="20px" /> {/* Ícono de huella de perro */}
              </Box>
              <Text fontSize="md">{requisito}</Text>
            </Flex>
          </ListItem>
        ))}
      </List>

      {/* Botón para desplegar información adicional */}
      <Button onClick={handleToggle} mt={5} colorScheme="orange">
        {showMore ? "Ver menos" : "Ver más"}
      </Button>

      {/* Información adicional que se muestra o se oculta */}
      <Collapse in={showMore} animateOpacity>
        <Box mt={4} p={4} bg="gray.200" borderRadius="md">
          <Text fontSize="md" textAlign="left">
            - Los adoptantes deben estar preparados para realizar controles veterinarios periódicos. <br />
            - Tener un espacio adecuado para la mascota. <br />
            - Aceptar que realizaremos visitas de seguimiento durante los primeros meses. <br />
            - La adopción debe ser aprobada por un especialista en bienestar animal.
          </Text>
        </Box>
      </Collapse>
    </Box>
  );
};

export default AdoptionRequirements;
