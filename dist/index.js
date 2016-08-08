(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './components/AsyncButton/AsyncButton', './components/Checkbox/Checkbox'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./components/AsyncButton/AsyncButton'), require('./components/Checkbox/Checkbox'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.AsyncButton, global.Checkbox);
    global.index = mod.exports;
  }
})(this, function (exports, _AsyncButton, _Checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Checkbox = exports.AsyncButton = undefined;

  var _AsyncButton2 = _interopRequireDefault(_AsyncButton);

  var _Checkbox2 = _interopRequireDefault(_Checkbox);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.AsyncButton = _AsyncButton2.default;
  exports.Checkbox = _Checkbox2.default;
});