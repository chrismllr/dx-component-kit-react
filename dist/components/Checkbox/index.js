(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Checkbox'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Checkbox'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Checkbox);
    global.index = mod.exports;
  }
})(this, function (exports, _Checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Checkbox2 = _interopRequireDefault(_Checkbox);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _Checkbox2.default;
});