import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Principal } from './pages/principal';
import { Habitaciones } from './pages/habitaciones';


function App() {
  return(
    //Estructura basica de rutas
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Principal />} />
        <Route path='/habitaciones' element={<Habitaciones />} />

      </Routes>
    </BrowserRouter>
  )
  
}

export default App;

