"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllersFactura = require("../controllers/controllers.factura.js");
var rutaFactura = (0, _express.Router)();
rutaFactura.get("/factura/:id", _controllersFactura.mostrarFactura);
rutaFactura.get("/factura", _controllersFactura.listarFactura);
rutaFactura.post("/factura", _controllersFactura.crearFactura);
var _default = exports["default"] = rutaFactura;