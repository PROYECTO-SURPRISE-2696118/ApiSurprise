"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _mensaje = require("./message/mensaje.js");
var _server = _interopRequireDefault(require("./server.js"));
_server["default"].listen(_server["default"].get("port"), function () {
  (0, _mensaje.mensajeconsola)("AccesoPuerto", "".concat(_mensaje.mensa.puerto, " ").concat(_server["default"].get("port"), " http://localhost:").concat(_server["default"].get("port")));
});