"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var proto = _interopRequireWildcard(require("./proto"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Util =
/*#__PURE__*/
function () {
  function Util(provider, custom) {
    _classCallCheck(this, Util);

    _defineProperty(this, "_core", null);

    this._core = provider.get('core');

    for (var key in custom) {
      if (this[key]) {
        // eslint-disable-next-line no-console
        console.warn("Built-in util can't add existing \"".concat(key, "\""));
        continue;
      }

      this[key] = custom[key];
    }
  }

  _createClass(Util, [{
    key: "getStatics",
    value: function getStatics(prop) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _this$_core$collectio = this._core.collection,
          names = _this$_core$collectio.names,
          services = _this$_core$collectio.services;
      var result = {};
      names = this.invert(names);

      for (var i = 0; i < services.length; i++) {
        var desc = services[i];
        var service = desc.value;
        var value = service[prop];
        if (value === undefined || !desc.enabled) continue;

        if (options.merge) {
          Object.assign(result, value);
          continue;
        }

        result[names[i]] = value;
      }

      return result;
    }
  }]);

  return Util;
}();

_defineProperty(Util, "service", 'util');

Object.assign(Util.prototype, proto);
var _default = Util;
exports["default"] = _default;