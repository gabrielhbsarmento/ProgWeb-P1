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
      <Form>
        <h1>🍽 Registro de pedidos 🍽 </h1>
        <h1>🤤</h1>
        <Input
          name='Pedido'
          placeholder='Digite o pedido'
          //onChange={handleChange}
          type='text'
        />
        <Input
          name='cost'
          placeholder='Preço'
          //onChange={handleChange}
          type='text'
        />
        <Botao
          type='submit'
          text='Cadastrar Pedido'
          //onClick={handleSubmit}
          //disabled={loading === true || !validadorInput()}
        />
        <Botao
          text='Deslogar'
          onClick={signOutHandler}
                  />
                  </Form>
    </Container>
    

    
  )
}

export default Home;