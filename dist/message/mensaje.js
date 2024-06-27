"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mensajeconsola = exports.mensa = exports.Error = exports.Acceso = void 0;
var _colors = _interopRequireDefault(require("colors"));
var mensajeconsola = exports.mensajeconsola = function mensajeconsola(tipo, mensaje) {
  switch (tipo) {
    case "AccesoPuerto":
      console.log(mensaje.bgGreen);
      break;
    case "ErrorPuerto":
      console.log(mensaje.bgRed);
      break;
  }
};
var mensa = exports.mensa = {
  puerto: "Ejecutandose en el Puerto de surprise:"
};
var Acceso = exports.Acceso = function Acceso(req, res) {
  var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  var mensaje = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  res.status(status).json({
    error: false,
    status: status,
    body: mensaje
  });
};
var Error = exports.Error = function Error(req, res) {
  var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
  var mensaje = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  res.status(status).json({
    error: true,
    status: status,
    body: mensaje
  });
};