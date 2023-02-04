import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react";
import axios from 'axios'

import Home from './pages/Home';
import Ofertas from './pages/Ofertas';
import Carpeta from './pages/Carpeta';
import Condiciones from './pages/Condiciones';
import Mapa from './pages/Mapa';
import Panel from './pages/Panel';


function App() {  

  const [body, setBody] = useState({user : '', pass : ''})
  const [datosUsuario, setDatosUsuario] = useState({ 
    title: '',
    bienvenida: '',
    admin: false,
    nombre: '',
    error: false,
    vendedor: false
  })


  const handleChange = (e) => {
    const { name, value } = e.target
    setBody({
      ...body,
      [name]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setBody({ 
      ...body,
      [e.target.user.name]: e.target.user.value,
      [e.target.pass.name]: e.target.pass.value
    })
    const res = await axios.post('http://localhost:3001/api/login', body);

    setDatosUsuario({
      ...datosUsuario,
      title: res.data.title,
      bienvenida: res.data.bienvenida || '',
      admin: res.data.admin || false,
      nombre: res.data.nombre || '',
      error: res.data.error || false,
      vendedor: res.data.vendedor || false
    })

  }
  const logout = async () => {

    const res = await axios.get('http://localhost:3001/api/logout');

    setDatosUsuario({
      ...datosUsuario,
      title: res.data.title, 
      bienvenida: res.data.bienvenida || '',
      admin: res.data.admin || false,
      nombre: res.data.nombre || '',
      error: res.data.error || false,
      vendedor: res.data.vendedor || false
    })
  }

  return (
 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home datosUsuario={datosUsuario} handleSubmit={handleSubmit} handleChange={handleChange} logout={logout} />} />
        <Route path="/login" element={<Home datosUsuario={datosUsuario} handleSubmit={handleSubmit} handleChange={handleChange} logout={logout} />} />
        <Route path="/logout" element={<Home datosUsuario={datosUsuario} handleSubmit={handleSubmit} handleChange={handleChange} logout={logout} />} />
        <Route path="/Home" element={<Home datosUsuario={datosUsuario} handleSubmit={handleSubmit} handleChange={handleChange} logout={logout} />} />
        <Route path="/Ofertas" element={<Ofertas datosUsuario={datosUsuario} handleSubmit={handleSubmit} handleChange={handleChange} logout={logout} />} />
        <Route path="/Carpeta" element={<Carpeta datosUsuario={datosUsuario} handleSubmit={handleSubmit} handleChange={handleChange} logout={logout} />} />
        <Route path="/Condiciones" element={<Condiciones datosUsuario={datosUsuario} handleSubmit={handleSubmit} handleChange={handleChange} logout={logout} />} />
        <Route path="/Mapa" element={<Mapa datosUsuario={datosUsuario} handleSubmit={handleSubmit} handleChange={handleChange} logout={logout} />} />
        <Route path="/Panel" element={<Panel datosUsuario={datosUsuario} handleSubmit={handleSubmit} handleChange={handleChange} logout={logout} />} />
        <Route path="/panel/agregarNoticia" element={<Panel datosUsuario={datosUsuario} handleSubmit={handleSubmit} handleChange={handleChange} logout={logout} />} />
        <Route path="/panel/agregar" element={<Panel datosUsuario={datosUsuario} handleSubmit={handleSubmit} handleChange={handleChange} logout={logout} />} />
        <Route path="/panel/eliminarNoticia/:id" element={<Panel datosUsuario={datosUsuario} handleSubmit={handleSubmit} handleChange={handleChange} logout={logout} />} />
        <Route path="/panel/modificarNoticia/:id" element={<Panel datosUsuario={datosUsuario} handleSubmit={handleSubmit} handleChange={handleChange} logout={logout} />} />
        <Route path="/panel/modificarNoticia" element={<Panel datosUsuario={datosUsuario} handleSubmit={handleSubmit} handleChange={handleChange} logout={logout} />} />

        <Route path='*' element={<Navigate to='/' />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
