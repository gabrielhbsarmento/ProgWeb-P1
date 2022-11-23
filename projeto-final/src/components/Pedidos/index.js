import {useEffect, useState} from 'react'

import {auth} from '../../services/firebase'
import { Container } from '../../pages/Home/styles'
import api from '../../services/api'
import { NavLink, useNavigate } from 'react-router-dom'

import './index.css'

export function Pedidos() {

    const [pedidos, setPedidos] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    
    useEffect(() => {
        if(loading){
            auth.onAuthStateChanged(user => {
                if(user){
                    setLoading(false)
                    api.get(`/pedido/find?userid=${auth.currentUser.uid}`).then(response => setPedidos(response.data))
                    
                }else{
                    navigate("/")
                }
            })
        }
        
    }, [loading])

    
    if(loading) return (<></>)

    return (
            <table style={{fontFamily: 'Arial, Helvetica, sans-serif', borderCollapse: 'collapse', width:'100%'}}>
                <tbody>
                    <tr>
                        <th style={{padding: '8px', textAlign: 'center', color: '#fff'}}>Pedido</th>
                        <th style={{padding: '8px', textAlign: 'center', color: '#fff'}}>Preço</th>
                        <th style={{padding: '8px', textAlign: 'center', color: '#fff'}}>Entregue</th>
                    </tr>
                    {pedidos.map(pedido => <tr key={pedido._id}>
                        <td style={{padding: '8px', textAlign: 'center', color: '#fff'}}>{pedido.pedido}</td>
                        <td style={{padding: '8px', textAlign: 'center', color: '#fff'}}>{pedido.preco}</td>
                        <td style={{padding: '8px', textAlign: 'center', color: '#fff'}}>{pedido.entregue ? "Sim": "Não"}</td>
                    </tr>)}
                </tbody>
            </table>
    )

}
