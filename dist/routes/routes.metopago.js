"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllersMetopago = require("../controllers/controllers.metopago.js");
var rutaMetoPago = (0, _express.Router)();
rutaMetoPago.get("/metopago/:id", _controllersMetopago.MostrarPago);
rutaMetoPago.get("/metopago", _controllersMetopago.ListarPago);
rutaMetoPago.post("/metopago", _controllersMetopago.crearPago);
var _default = exports["default"] = rutaMetoPago;