(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './FlashMessage'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./FlashMessage'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.FlashMessage);
    global.index = mod.exports;
  }
})(this, function (exports, _FlashMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _FlashMessage2 = _interopRequireDefault(_FlashMessage);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _FlashMessage2.default;
});