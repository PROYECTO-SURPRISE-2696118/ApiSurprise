/**
 * Rutas
 * @module rutas
 */
import { Router } from "express";
import { actualizarPedido, crearPedido, eliminarPedido, listarPedido } from "../controllers/controllers.pedido.js";


const routesPedidos = Router();

/**
 * Se utilizo las ruta de pedidos para poder utilizar el controlador de pedido
 */
routesPedidos.get("/pedido", listarPedido)
routesPedidos.put("pedido/:id", actualizarPedido)
routesPedidos.delete("pedido/:id", eliminarPedido)


export default routesPedidos;