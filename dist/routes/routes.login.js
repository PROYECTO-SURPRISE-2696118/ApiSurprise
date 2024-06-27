"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _ejs = require("ejs");
var _controllersLogin = require("../controllers/controllers.login.js");
var rutaLogin = (0, _express.Router)();
rutaLogin.get("/", _controllersLogin.inicio);
rutaLogin.get("/sobrenosotros", _controllersLogin.sobrenosotros);
rutaLogin.get("/productos", _controllersLogin.productos);
rutaLogin.get("/dashboard", _controllersLogin.dashboard);
var _default = exports["default"] = rutaLogin;