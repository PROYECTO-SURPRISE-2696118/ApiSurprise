"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllersProveedor = require("../controllers/controllers.proveedor.js");
var rutaProveedor = (0, _express.Router)();
rutaProveedor.get("/proveedor/:id", _controllersProveedor.mostrarProveedor);
rutaProveedor.get("/proveedor", _controllersProveedor.listarProveedor);
rutaProveedor.post("/proveedor", _controllersProveedor.crearProveedor);
rutaProveedor["delete"]("/proveedor/:id", _controllersProveedor.eliminarProveedor);
var _default = exports["default"] = rutaProveedor;