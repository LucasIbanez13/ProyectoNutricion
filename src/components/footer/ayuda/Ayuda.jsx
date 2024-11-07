import React from "react"; 
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from "@chakra-ui/react";

const HelpSection = () => {
  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "#533E5B" }}>Sección de Ayuda</h2>
      
      {/* Preguntas Frecuentes */}
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "white", color: "white" }} borderColor="#533E5B">
              <Box flex="1" textAlign="left" color="#533E5B">
                ¿Cómo es el proceso de adopción?
              </Box>
              <AccordionIcon color="#533E5B" />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            El proceso de adopción incluye una visita al refugio, una entrevista para conocer tu estilo de vida y finalmente llenar un formulario de adopción.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "white", color: "white" }} borderColor="#533E5B">
              <Box flex="1" textAlign="left" color="#533E5B">
                ¿Qué documentos necesito para adoptar?
              </Box>
              <AccordionIcon color="#533E5B" />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Necesitarás una identificación oficial, comprobante de domicilio y llenar un formulario de adopción.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "white", color: "white" }} borderColor="#533E5B">
              <Box flex="1" textAlign="left" color="#533E5B">
                ¿Cuáles son los costos de adopción?
              </Box>
              <AccordionIcon color="#533E5B" />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Los costos de adopción varían dependiendo de la mascota, pero generalmente cubren vacunas, esterilización y microchip.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "white", color: "white" }} borderColor="#533E5B">
              <Box flex="1" textAlign="left" color="#533E5B">
                ¿Qué debo considerar antes de adoptar una mascota?
              </Box>
              <AccordionIcon color="#533E5B" />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Debes considerar tu tiempo disponible, espacio en casa, y la capacidad financiera para cuidar a una mascota a largo plazo.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      {/* Sección de Contacto */}
      <div className="mt-8 p-4 shadow-lg rounded-lg" style={{ backgroundColor: "white" }}>
        <h3 className="text-xl font-semibold mb-4" style={{ color: "#533E5B" }}>Contacto</h3>
        <p>Teléfono: +123 456 7890</p>
        <p>Email: info@adopciones.com</p>
        <p>Horario de atención: Lunes a Viernes, 9:00 AM - 6:00 PM</p>
      </div>
    </div>
  );
};

export default HelpSection;
