import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getAllHotels } from '../api/api';

export function Principal() {
  const { handleSubmit, control, register, formState: { errors } } = useForm(); // Agregar react-hook-form

  const [hotels, setHotels] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [roomType, setRoomType] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  useEffect(() => {
    async function loadHotels() {
      try {
        const res = await getAllHotels();
        console.log(res.data);
        setHotels(res.data);
        setFilteredHotels(res.data);
      } catch (error) {
        console.error('Error al cargar hoteles:', error);
      }
    }
    loadHotels();
  }, []);

  useEffect(() => {
    const filtered = hotels.filter(hotel =>
      hotel.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredHotels(filtered);
  }, [searchTerm, hotels]);

  const onSubmit = (data) => {
    // Validar que los campos estén llenos
    if (
      !data.citySearch ||
      !data.roomType ||
      !data.numberOfPeople ||
      !data.startDate ||
      !data.endDate
    ) {
      console.log('Por favor, complete todos los campos.');
      return;
    }
  
    console.log('Información enviada:');
    console.log('Ciudad:', data.citySearch);
    console.log('Tipo de habitación:', data.roomType);
    console.log('Cantidad de personas:', data.numberOfPeople);
    console.log('Fecha de inicio:', data.startDate);
    console.log('Fecha de finalización:', data.endDate);
  };

  return (
    <>
      <h1>Bienvenido a Buscador de Hotel Axede</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="citySearch">Buscar ciudad:</label>
          <input
            type="text"
            id="citySearch"
            list="cityOptions"
            placeholder="Ingresa ciudad"
            {...register('citySearch', { required: true })}
          />
          <datalist id="cityOptions">
            {filteredHotels.map((hotel, index) => (
              <option key={index} value={hotel.city} />
            ))}
          </datalist>
          {errors.citySearch && <span>Este campo es requerido</span>}
        </div>

        <div>
          <label htmlFor="roomType">Tipo de habitación:</label>
          <select
            id="roomType"
            {...register('roomType', { required: true })}
          >
            <option value="">Seleccione</option>
            <option value="vip">VIP</option>
            <option value="estandar">Estándar</option>
            <option value="premium">Premium</option>
          </select>
          {errors.roomType && <span>Este campo es requerido</span>}
        </div>

        {/* Cantidad de personas */}
        <div>
          <label htmlFor="numberOfPeople">Cantidad de personas:</label>
          <input
            type="number"
            id="numberOfPeople"
            {...register('numberOfPeople', { required: true })}
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(parseInt(e.target.value, 10))}
          />
          {errors.numberOfPeople && <span>Este campo es requerido</span>}
        </div>
        <div>
        <label htmlFor="startDate">Fecha de inicio:</label>
        <input
            type="date"
            id="startDate"
            {...register('startDate', { required: true })}
        />
        {errors.startDate && <span>Este campo es requerido</span>}
        </div>
        <div>
        <label htmlFor="endDate">Fecha de finalización:</label>
        <input
            type="date"
            id="endDate"
            {...register('endDate', { required: true })}
        />
        {errors.endDate && <span>Este campo es requerido</span>}
        </div>

        <button type="submit">Buscar habitaciones</button>
      </form>
    </>
  );
}
