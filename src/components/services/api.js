import axios from 'axios';

// Configuración de instancia de Axios con la URL base
const api = axios.create({
  baseURL: 'http://localhost:3001/api', // Cambia esta URL según tu configuración
});

// Función para obtener todas las adopciones
export const getAdoptions = async () => {
  try {
    const response = await api.get('/adoptions');
    return response.data;
  } catch (error) {
    console.error('Error al obtener adopciones:', error);
    throw error;
  }
};

// Función para obtener una adopción por ID
export const getAdoptionById = async (id) => {
  try {
    const response = await api.get(`/adoptions/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener adopción con ID ${id}:`, error);
    throw error;
  }
};

// Otras funciones para crear, actualizar y eliminar adopciones según necesites
