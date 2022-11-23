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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true)
      const data = await (auth, form.Pedido, form.Preco)
      if (data) {
        alert('Pedido Cadastrado com Sucesso')
        
        
      }
      
      setLoading(false)
    }
    catch (err) {
      alert('Algo deu errado com o Cadastro' + err)
    }
  }


  const signOutHandler = async () => {
    await signOut(auth);
    navigate("/login")
  }

  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }
  
  return (
    <Container>
      <Form>
        <h1>🍽 Registro de pedidos 🍽 </h1>
        <h1>🤤</h1>
        <Input
          name='Pedido'
          placeholder='Digite o pedido'
          onChange={handleChange}
          type='text'
        />
        <Input
          name='Preco'
          placeholder='Preço'
          onChange={handleChange}
          type='text'
        />
        <Botao
          type='submit'
          text='Cadastrar Pedido'
          onClick={handleSubmit}
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