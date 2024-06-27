"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sobrenosotros = exports.productos = exports.inicio = exports.dashboard = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _dotenv = require("dotenv");
var _controllersUsuario = require("./controllers.usuario.js");
var _controllersProducto = require("./controllers.producto.js");
/**
 * Importaciones para los controladores del login
 * @type {object}
 */

(0, _dotenv.config)();

/**
 * Inicio donde se encuentra el login
 * @param {object} req Peticion
 * @param {object} res Respuesta
 */
var inicio = exports.inicio = function inicio(req, res) {
  var url = process.env.BACKEND_URL;
  var opciones = {
    url: url
  };
  res.render("views.login.ejs", opciones);
};
/**
 * Es la informacion de nuestra Web
 * @param {object} req Peticion
 * @param {object} res Respuesta
 */
var sobrenosotros = exports.sobrenosotros = function sobrenosotros(req, res) {
  res.render("views.sobrenosotros.ejs");
};
/**
 * Los productos
 * @param {object} req Peticion
 * @param {object} res Respuesta
 */
var productos = exports.productos = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var producto;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _controllersProducto.listarProducto)(req, res);
        case 3:
          producto = _context.sent;
          res.render("views.productos.ejs", {
            producto: producto[0]
          });
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.json({
            "error": _context.t0
          });
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function productos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Menu del cajero
 * @param {object} req Peticion
 * @param {object} res Respuesta
 */
var dashboard = exports.dashboard = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var respuesta, producto, fiado;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _controllersUsuario.listarUsuario)(req, res);
        case 3:
          respuesta = _context2.sent;
          _context2.next = 6;
          return (0, _controllersProducto.listarProducto)(req, res);
        case 6:
          producto = _context2.sent;
          _context2.next = 9;
          return (0, _controllersUsuario.fiados)(req, res);
        case 9:
          fiado = _context2.sent;
          res.render("views.dashboard.ejs", {
            usuarios: respuesta[0],
            producto: producto[0],
            fiado: fiado
          });
          _context2.next = 16;
          break;
        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](0);
          res.json({
            "error": _context2.t0
          });
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 13]]);
  }));
  return function dashboard(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();