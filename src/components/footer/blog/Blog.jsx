import React from 'react';
import { Box, Heading, Text, Stack } from '@chakra-ui/react';
import { FaPaw } from 'react-icons/fa';  // Icono relacionado con mascotas

const Card = ({ title, children }) => {
  return (
    <Box
      className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
      border="1px"
      borderColor="gray.200"
      _hover={{ borderColor: "#533E5B", shadow: "lg" }}
    >
      <Box className="flex items-center mb-4">
        <FaPaw size="24px" className="text-[#533E5B] mr-2" />  {/* Icono de pata */}
        <Heading as="h3" size="lg" color="#533E5B">
          {title}
        </Heading>
      </Box>
      <Text className="text-gray-600">{children}</Text>
    </Box>
  );
};

const Blog = () => {
  return (
    <Box className="bg-gray-100 py-8 px-4 lg:px-8">
      <Box className="max-w-5xl mx-auto">
        {/* Tarjetas envueltas en un stack para mantener consistencia */}
        <Stack spacing={6}>
          {/* Tarjeta de Sobre Nosotros */}
          <Card title="Sobre Nosotros">
            En <strong>Huellitas a la obra</strong>, creemos que todos los animales merecen un hogar lleno de amor y cuidado. Nuestro sitio web nace de la pasión por ayudar a perros y gatos abandonados a encontrar una segunda oportunidad en familias responsables y cariñosas.
          </Card>

          {/* Tarjeta de ¿Quiénes somos? */}
          <Card title="¿Quiénes somos?">
            Somos un equipo comprometido con el bienestar animal, trabajando junto a refugios, protectoras de animales y voluntarios para asegurar que cada perro y gato que pasa por nuestra plataforma tenga la oportunidad de ser adoptado. Nuestro objetivo es conectar a las mascotas que más lo necesitan con personas que estén listas para abrirles las puertas de su hogar.
          </Card>

          {/* Tarjeta de Nuestra misión */}
          <Card title="Nuestra misión">
            Nuestra misión es reducir el número de animales abandonados, promoviendo la adopción responsable. Nos esforzamos por educar a la comunidad sobre la importancia de adoptar en lugar de comprar, y sobre el impacto positivo que esto tiene en la vida de los animales y en nuestra sociedad.
          </Card>

          {/* Tarjeta de ¿Cómo trabajamos? */}
          <Card title="¿Cómo trabajamos?">
            Nos aseguramos de que cada mascota listada en nuestro sitio haya sido evaluada por profesionales veterinarios y que todos los detalles importantes estén disponibles para los adoptantes potenciales. Además, ofrecemos guías y consejos sobre cómo prepararse para la adopción, incluyendo recomendaciones para el cuidado y la integración de las nuevas mascotas en el hogar.
          </Card>

          {/* Tarjeta de Únete a nosotros */}
          <Card title="Únete a nosotros">
            Adoptar una mascota no solo cambia la vida de ese animal, también enriquece la tuya. Te invitamos a formar parte de esta hermosa causa y darles un hogar a aquellos que tanto lo necesitan.
          </Card>

          {/* Tarjeta de 5 pasos para prepararte antes de adoptar */}
          <Card title="5 pasos para prepararte antes de adoptar un perro">
            Adoptar un perro es un acto de amor que puede cambiar tu vida para siempre. Sin embargo, este es un compromiso a largo plazo que requiere preparación. Antes de llevar a tu nuevo amigo peludo a casa, es importante que estés listo para recibirlo con todo lo que necesita para ser feliz y estar sano. Aquí te compartimos 5 pasos clave para que tu adopción sea un éxito.
          </Card>
          
          <Card title="1. Evalúa tu estilo de vida">
          Antes de dar el paso hacia la adopción, es crucial analizar tu rutina diaria y tu estilo de vida. Piensa en cómo encajará un perro en tu vida. Algunos puntos a considerar:

          <strong>Tiempo disponible:</strong> Los perros necesitan tiempo para paseos, juegos y atención. Si tu rutina es muy ocupada, quizás un perro adulto que sea más tranquilo se ajuste mejor.
          <strong>Espacio:</strong> ¿Vives en un apartamento o en una casa con jardín? El tamaño y la energía del perro que elijas debe coincidir con el espacio donde vivirá.
          <strong>Energía y actividad:</strong> Si te encanta salir a correr, tal vez un perro activo sea tu mejor compañero. Si prefieres una vida más relajada, un perro de bajo nivel de energía es ideal.
          </Card>

          <Card title="2. Investiga sobre las razas y temperamentos">
          Aunque adoptar es una excelente opción, es útil saber más sobre las razas y sus características. No solo para elegir una raza, sino para comprender mejor las necesidades de cada perro según su tamaño y temperamento. Cada perro es un mundo, pero algunas razas tienden a requerir más actividad física, mientras que otras son más tranquilas.

          <strong>Perros activos:</strong> Border Collies, Labradores, Jack Russell Terriers.
          <strong>Perros tranquilos:</strong> Bulldogs, Basset Hounds, Shih Tzus.
          Habla con el refugio o la organización de adopción para que te asesoren sobre qué tipo de perro encajaría mejor contigo.
          </Card>

          <Card title="3. Prepara tu hogar">
          Antes de que tu nuevo perro llegue a casa, asegúrate de que el espacio esté listo para recibirlo.

          <strong>Zona de descanso:</strong> Designa un lugar cómodo donde pueda dormir, ya sea una cama para perros o una manta suave.
          <strong>Seguridad:</strong> Verifica que tu hogar sea seguro. Retira objetos peligrosos o pequeños que el perro pueda morder o tragar. Protege cables eléctricos, plantas tóxicas y asegúrate de que las ventanas y puertas estén bien cerradas para evitar fugas.
          <strong>Comida y agua:</strong> Ten listos los cuencos para comida y agua, junto con una dieta adecuada para su edad y tamaño.
          </Card>

          <Card title="4. Busca un veterinario de confianza">
          Uno de los primeros pasos tras la adopción es llevar a tu nuevo perro a una revisión veterinaria. Asegúrate de contar con un veterinario de confianza cerca de tu hogar.

          <strong>Vacunas:</strong> Verifica que el perro tenga todas las vacunas necesarias y, si no, programa las citas para completarlas.
          <strong>Esterilización:</strong> Pregunta si el perro ya está esterilizado o si deberías programar la cirugía.
          <strong>Consejos:</strong> Pide orientación sobre el tipo de alimento, el plan de vacunación y cualquier recomendación específica para el cuidado de tu perro.
          </Card>

          <Card title="5. Ten paciencia y mucho amor">
          Los primeros días en un nuevo hogar pueden ser desafiantes tanto para el perro como para ti. Es normal que el perro esté nervioso o desorientado al principio. Dale tiempo para que se adapte a su nuevo entorno, y sobre todo, ten paciencia.

          <strong>Establece una rutina:</strong> Los perros se sienten más seguros cuando tienen una rutina establecida. Establece horarios regulares para paseos, comidas y juegos.
          <strong>Entrenamiento:</strong> Si adoptas un cachorro o un perro que necesita entrenamiento, empieza con pequeñas lecciones y refuerza el buen comportamiento con premios o caricias.
          <strong>Dale amor:</strong> Adopta con el corazón. Dale mucho cariño y tiempo para que confíe en ti.
          </Card>
          
          <Card title="Conclusión">
          Adoptar un perro es una experiencia gratificante, pero también una gran responsabilidad. Si sigues estos cinco pasos antes de la adopción, te asegurarás de estar preparado para darle a tu nuevo amigo peludo la vida que se merece. Recuerda que el amor, la paciencia y la dedicación son las claves para una relación feliz y duradera con tu mascota.
          </Card>

        </Stack>
      </Box>
    </Box>
  );
};

export default Blog;

