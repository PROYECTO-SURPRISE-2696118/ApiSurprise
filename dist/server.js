"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _dotenv = require("dotenv");
var _routesProducto = _interopRequireDefault(require("./routes/routes.producto.js"));
var _routesUsuario = _interopRequireDefault(require("./routes/routes.usuario.js"));
var _routesProveedor = _interopRequireDefault(require("./routes/routes.proveedor.js"));
var _routesFacturas = _interopRequireDefault(require("./routes/routes.facturas.js"));
var _routesMetopago = _interopRequireDefault(require("./routes/routes.metopago.js"));
var _index = _interopRequireDefault(require("./routes/index.js"));
var _ejs = _interopRequireDefault(require("ejs"));
var _path = _interopRequireWildcard(require("path"));
var _url = require("url");
var _cors = _interopRequireDefault(require("cors"));
var _morgan = _interopRequireDefault(require("morgan"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
(0, _dotenv.config)();
var _filename = (0, _url.fileURLToPath)(import.meta.url);
var _dirname = (0, _path.dirname)(_filename);
var server = (0, _express["default"])();
server.use(_express["default"].json());
server.use(_express["default"]["static"](_path["default"].join(_dirname, "../../frontend/public")));
server.use(_express["default"].urlencoded({
  extended: true
}));
server.use((0, _cors["default"])());
server.use((0, _morgan["default"])("dev"));

//Rutas
server.use("/", _index["default"]);
server.use("/producto", _routesProducto["default"]);
server.use("/usuarios", _routesUsuario["default"]);
server.use("/pago", _routesMetopago["default"]);
server.set("view engine", "ejs");
server.set("views", _path["default"].join(_dirname, '../../frontend/views'));
server.set("port", process.env.PORT || 3000);
var _default = exports["default"] = server;