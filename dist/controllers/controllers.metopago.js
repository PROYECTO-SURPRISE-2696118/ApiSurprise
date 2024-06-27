"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crearPago = exports.MostrarPago = exports.ListarPago = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mysqlDb = require("../config/mysql.db.js");
var MostrarPago = exports.MostrarPago = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var id, respuesta;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          id = req.params.id;
          _context.prev = 1;
          _context.next = 4;
          return _mysqlDb.pool.query("CALL SP_MOSTRAR_METODOPAGO (\"".concat(id, "\")"));
        case 4:
          respuesta = _context.sent;
          res.json({
            "respuesta": respuesta[0][0]
          });
          _context.next = 11;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          res.json({
            "respuesta": _context.t0
          });
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 8]]);
  }));
  return function MostrarPago(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var ListarPago = exports.ListarPago = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var respuesta;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _mysqlDb.pool.query("CALL SP_LISTAR_METODOPAGO()");
        case 3:
          respuesta = _context2.sent;
          res.json({
            "respuesta": respuesta[0][0]
          });
          _context2.next = 10;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.json({
            "respuesta": _context2.t0
          });
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function ListarPago(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var crearPago = exports.crearPago = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var tipopago, respuesta;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          tipopago = req.body.tipopago;
          _context3.prev = 1;
          _context3.next = 4;
          return _mysqlDb.pool.query("CALL SP_CREAR_METODOPAGO (\"".concat(tipopago, "\")"));
        case 4:
          respuesta = _context3.sent;
          res.json({
            "respuesta": "El metodo de pago ha sido creado"
          });
          _context3.next = 11;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          res.json({
            "error": "El metodo de pago no se creo"
          });
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return function crearPago(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();