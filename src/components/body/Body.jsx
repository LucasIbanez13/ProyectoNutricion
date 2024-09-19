import React, { useState } from 'react';
import AdoptionCard from './card/Card';
import LostAnimals from './Perdidos/LostAnimals'; // Importa el componente de animales perdidos

function Body() {
  const [view, setView] = useState('adoption'); // Estado para cambiar entre adopción y perdidos

  return (
    <div>
      {view === 'adoption' && (
        <>
          <AdoptionCard />
          <AdoptionCard />
          <AdoptionCard />
        </>
      )}
      {view === 'lost' && <LostAnimals />}
    </div>
  );
}

export default Body;
