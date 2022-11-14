import React from 'react'
import {Container , Form} from './styles'
import Input from '../../components/imput/index';
const Login = () => {
    return ( 
        <Container>
            <Form>
                <h1>Faça seu Login !</h1>
                <Input/>
                <Input/>
                <div>
                  <p>não possui conta?</p>
                  <a>Cadastrar</a>
                </div>
            </Form>
        </Container>

    );
}
 
export default Login;