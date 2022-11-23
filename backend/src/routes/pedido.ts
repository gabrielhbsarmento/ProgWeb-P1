import express from 'express'
import PedidosController from '../controllers/PedidosController';
const routes = express.Router();

routes.post('/add', PedidosController.create)
routes.get('/find', PedidosController.get)

export default routes;
