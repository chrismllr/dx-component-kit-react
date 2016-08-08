(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './components/AsyncButton/AsyncButton'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./components/AsyncButton/AsyncButton'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.AsyncButton);
    global.index = mod.exports;
  }
})(this, function (exports, _AsyncButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _AsyncButton2 = _interopRequireDefault(_AsyncButton);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = {
    AsyncButton: _AsyncButton2.default
  };
});