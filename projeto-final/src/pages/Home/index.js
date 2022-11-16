import React, {useState} from 'react'
import { Container, Form, SubContainerSign } from './styles'
import Input from '../../components/input/index'
import Botao from '../../components/Botao/index'
import { validarEmail, validarSenha, validarTelefone, validarNome, validarConfirmarSenha } from '../../utils/validadores'
import UserService from '../../services/UserService'
import { NavLink, useNavigate } from 'react-router-dom'

import {signOut} from 'firebase/auth'
import {auth} from '../../services/firebase'

const userService = new UserService()

const Home = () => {
  const [loading, setLoading] = useState()
  const [form, setForm] = useState([])
  const navigate = useNavigate()

  const signOutHandler = async () => {
    await signOut(auth);
    navigate("/login")
  }
  
  return (
    <Container>
        <Botao
          text='Deslogar'
          onClick={signOutHandler}
                  />
    </Container>
    
  )
}

export default Home;