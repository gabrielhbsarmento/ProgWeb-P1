import React from 'react'
import Login from '../pages/login/index'
import ProtectedRoutes from '../Routes/ProtectedRoutes'
import Cadastro from '../pages/Cadastro/index'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Routering = () => {
  return ( 
    <Router>
      <Routes>
        <Route path="*" element={<Login/>} />
        <Route path="/cadastrar" element={<Cadastro/>} />
        <Route path="/home" element={
          <ProtectedRoutes>
            <h1>Home</h1> 
          </ProtectedRoutes>
          }
        />
      </Routes>
    </Router>
   );
}
 
export default Routering;