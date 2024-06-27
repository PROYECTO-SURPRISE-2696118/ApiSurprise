"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllersUsuario = require("../controllers/controllers.usuario.js");
var _token = require("../middleware/token.js");
var rutaUsuario = (0, _express.Router)();

//mostrar
rutaUsuario.get("/:id", _controllersUsuario.mostrarUsuario);
//listar
rutaUsuario.get("/usuario", _controllersUsuario.listarUsuario);
//crear
rutaUsuario.post("/usuario", _controllersUsuario.crearUsuario);
//modificar
rutaUsuario.put("/usuario/:id", _token.verifytoken, _controllersUsuario.modificarUsuario);
//eliminar
rutaUsuario["delete"]("/usuario/:id", _token.verifytoken, _controllersUsuario.eliminarUsuario);
//login
rutaUsuario.post("/loginusuario", _controllersUsuario.logueoUsuario);
//Validar token
rutaUsuario.post("/oauth", _token.verifytoken, _controllersUsuario.validarToken);
var _default = exports["default"] = rutaUsuario;