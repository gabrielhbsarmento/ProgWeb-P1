import { Request, Response } from 'express';
import { Pedido, pedidoSchemaYup } from '../model/Pedido';

export default {
    async create(request: Request, response: Response){

        const {pedido, preco, userid} = request.body;

        if(!(await pedidoSchemaYup.isValid({
            pedido, preco, userid
        }))){

            return response.status(401).json({message: 'Campos inválidos'})

        }

        const pedido_model = await Pedido.create({pedido, preco, userid})

        return response.json(pedido_model);

    },

    async get(request: Request, response: Response){
        const {userid} = request.query;

        const pedidos = await Pedido.find({userid: userid});

        return response.json(pedidos);

    }
}