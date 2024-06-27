"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllersProducto = require("../controllers/controllers.producto.js");
var rutaProducto = (0, _express.Router)();
rutaProducto.get("/producto/:id", _controllersProducto.mostrarProducto);
rutaProducto.get("/producto", _controllersProducto.listarProducto);
rutaProducto.post("/producto", _controllersProducto.crearProducto);
rutaProducto.put("/producto/:id", _controllersProducto.modificarProducto);
rutaProducto["delete"]("/producto/:id", _controllersProducto.eliminarProducto);
var _default = exports["default"] = rutaProducto;