"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _routesProducto = _interopRequireDefault(require("./routes.producto.js"));
var _routesUsuario = _interopRequireDefault(require("./routes.usuario.js"));
var _routesProveedor = _interopRequireDefault(require("./routes.proveedor.js"));
var _routesFacturas = _interopRequireDefault(require("./routes.facturas.js"));
var _routesMetopago = _interopRequireDefault(require("./routes.metopago.js"));
var _routesLogin = _interopRequireDefault(require("./routes.login.js"));
var ruta = (0, _express.Router)();
ruta.use("/producto", _routesProducto["default"]);
ruta.use("/usuario", _routesUsuario["default"]);
ruta.use("/proveedor", _routesProveedor["default"]);
ruta.use("/factura", _routesFacturas["default"]);
ruta.use("/metopago", _routesMetopago["default"]);
//Rutas views
ruta.use("/", _routesLogin["default"]);
var _default = exports["default"] = ruta;