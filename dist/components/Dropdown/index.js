(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Dropdown'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Dropdown'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Dropdown);
    global.index = mod.exports;
  }
})(this, function (exports, _Dropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Dropdown2 = _interopRequireDefault(_Dropdown);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _Dropdown2.default;
});