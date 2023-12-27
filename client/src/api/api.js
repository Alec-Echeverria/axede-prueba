import axios from 'axios'


//Obtenermos los hoteles disponibles de la BD
export const getAllHotels=()=>{
    return axios.get('http://127.0.0.1:8000/hotel/api/v1/hotel/')//direccion de la api
}