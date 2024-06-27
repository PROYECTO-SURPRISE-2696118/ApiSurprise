"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validarToken = exports.mostrarUsuario = exports.modificarUsuario = exports.logueoUsuario = exports.listarUsuario = exports.fiados = exports.eliminarUsuario = exports.crearUsuario = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _mysqlDb = require("../config/mysql.db.js");
var _mensaje = require("../message/mensaje.js");
var _dotenv = require("dotenv");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _console = require("console");
(0, _dotenv.config)();
var mostrarUsuario = exports.mostrarUsuario = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var id, _yield$pool$query, _yield$pool$query2, respuesta;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          id = req.params.id;
          _context.prev = 1;
          _context.next = 4;
          return _mysqlDb.pool.query("CALL SP_MOSTRAR_USUARIO(?)", [id]);
        case 4:
          _yield$pool$query = _context.sent;
          _yield$pool$query2 = (0, _slicedToArray2["default"])(_yield$pool$query, 1);
          respuesta = _yield$pool$query2[0];
          if (respuesta && respuesta.length > 0) {
            res.json(respuesta[0]);
          } else {
            res.status(404).json({
              message: "User not found"
            });
          }
          _context.next = 13;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](1);
          res.status(500).json({
            error: _context.t0.message
          });
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 10]]);
  }));
  return function mostrarUsuario(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var fiados = exports.fiados = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var respuesta;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _mysqlDb.pool.query('SELECT * FROM usuarios WHERE estado = "fiado" or estado = "pendiente";');
        case 3:
          respuesta = _context2.sent;
          return _context2.abrupt("return", respuesta[0]);
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          return _context2.abrupt("return", {
            "error": _context2.t0
          });
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function fiados(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var listarUsuario = exports.listarUsuario = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var respuesta;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _mysqlDb.pool.query("CALL SP_LISTAR_USUARIO()");
        case 3:
          respuesta = _context3.sent;
          res.json({
            "respuesta": respuesta[0]
          });
          return _context3.abrupt("return", respuesta[0]);
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          return _context3.abrupt("return", {
            "error": _context3.t0
          });
        case 12:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return function listarUsuario(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var crearUsuario = exports.crearUsuario = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body, identificacion, nombres, telefono, correo, rol, estado, contrasenasincifrar, hash, contrasena, respuesta;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _req$body = req.body, identificacion = _req$body.identificacion, nombres = _req$body.nombres, telefono = _req$body.telefono, correo = _req$body.correo, rol = _req$body.rol, estado = _req$body.estado;
          contrasenasincifrar = req.body.contrasena;
          _context4.prev = 2;
          _context4.next = 5;
          return _bcrypt["default"].hash(contrasenasincifrar, 2);
        case 5:
          hash = _context4.sent;
          contrasena = hash;
          _context4.next = 9;
          return _mysqlDb.pool.query("CALL SP_CREAR_USUARIO (?,?,?,?,?,?,?)", [identificacion, nombres, telefono, correo, contrasena, rol, estado]);
        case 9:
          respuesta = _context4.sent;
          res.json({
            "respuesta": "el usuario ha sido creado"
          });
          _context4.next = 16;
          break;
        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](2);
          // res.json({"error": "el usuario no ha sido creado"})
          console.log(_context4.t0);
        case 16:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 13]]);
  }));
  return function crearUsuario(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var modificarUsuario = exports.modificarUsuario = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, _req$body2, identificacion, nombres, telefono, correo, contrasena, rol, estado, respuesta;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, identificacion = _req$body2.identificacion, nombres = _req$body2.nombres, telefono = _req$body2.telefono, correo = _req$body2.correo, contrasena = _req$body2.contrasena, rol = _req$body2.rol, estado = _req$body2.estado;
          _context5.prev = 2;
          _context5.next = 5;
          return _mysqlDb.pool.query("CALL SP_MODIFICAR_USUARIO (?,?, ?, ?, ?, ?, ?, ?)", [id, identificacion, nombres, telefono, correo, contrasena, rol, estado]);
        case 5:
          respuesta = _context5.sent;
          if (respuesta[0].affectedRows == 1) {
            (0, _mensaje.Acceso)(req, res, 201, "Usuario modificado:" + correo);
          } else {
            (0, _mensaje.Error)(req, res, 400, "No se pudo modificar el usuario: " + correo);
          }
          _context5.next = 12;
          break;
        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](2);
          (0, _mensaje.Error)(req, res, 400, _context5.t0);
        case 12:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[2, 9]]);
  }));
  return function modificarUsuario(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var eliminarUsuario = exports.eliminarUsuario = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, respuesta;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          id = req.params.id;
          _context6.prev = 1;
          _context6.next = 4;
          return _mysqlDb.pool.query("CALL SP_ELIMINAR_USUARIO(?)", [id]);
        case 4:
          respuesta = _context6.sent;
          res.json(respuesta[0]);
          _context6.next = 11;
          break;
        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](1);
          res.json({
            "error": "el usuario no ha sido eliminado"
          });
        case 11:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 8]]);
  }));
  return function eliminarUsuario(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var logueoUsuario = exports.logueoUsuario = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var _req$body3, correo, contrasena, respuesta, match, payload, token;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _req$body3 = req.body, correo = _req$body3.correo, contrasena = _req$body3.contrasena;
          console.log(correo + contrasena);
          _context7.prev = 2;
          _context7.next = 5;
          return _mysqlDb.pool.query("CALL SP_BUSCAR_USUARIO(?)", [correo]);
        case 5:
          respuesta = _context7.sent;
          if (!(respuesta[0][0] == 0)) {
            _context7.next = 9;
            break;
          }
          (0, _mensaje.Error)(req, res, 404, "Usuario no existe");
          return _context7.abrupt("return");
        case 9:
          _context7.next = 11;
          return _bcrypt["default"].compare(contrasena, respuesta[0][0][0].contrasena);
        case 11:
          match = _context7.sent;
          console.log(respuesta[0][0][0].contrasena);
          if (match) {
            _context7.next = 16;
            break;
          }
          (0, _mensaje.Error)(req, res, 401, "Contraseña Incorrecta");
          return _context7.abrupt("return");
        case 16:
          payload = {
            "correo": respuesta.correo
          };
          token = _jsonwebtoken["default"].sign(payload, process.env.TOKEN_PRIVATEKEY, {
            expiresIn: process.env.TOKEN_EXPIRES_IN
          });
          (0, _mensaje.Acceso)(req, res, 200, {
            token: token
          });
          _context7.next = 25;
          break;
        case 21:
          _context7.prev = 21;
          _context7.t0 = _context7["catch"](2);
          (0, _mensaje.Error)(req, res, 500, "Error en el servidor, por favor inténtalo de nuevo más tarde");
          console.log(_context7.t0);
        case 25:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[2, 21]]);
  }));
  return function logueoUsuario(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var validarToken = exports.validarToken = function validarToken(req, res) {
  (0, _mensaje.Acceso)(req, res, 200, {
    "token": "El token es valido"
  });
};
//poner un export para poder hacer la documentacion del codigo despues de terminar con el backend