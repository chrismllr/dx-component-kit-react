(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './components/AsyncButton/AsyncButton', './components/Checkbox/Checkbox', './components/Dropdown/Dropdown'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./components/AsyncButton/AsyncButton'), require('./components/Checkbox/Checkbox'), require('./components/Dropdown/Dropdown'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.AsyncButton, global.Checkbox, global.Dropdown);
    global.index = mod.exports;
  }
})(this, function (exports, _AsyncButton, _Checkbox, _Dropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Dropdown = exports.Checkbox = exports.AsyncButton = undefined;

  var _AsyncButton2 = _interopRequireDefault(_AsyncButton);

  var _Checkbox2 = _interopRequireDefault(_Checkbox);

  var _Dropdown2 = _interopRequireDefault(_Dropdown);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.AsyncButton = _AsyncButton2.default;
  exports.Checkbox = _Checkbox2.default;
  exports.Dropdown = _Dropdown2.default;
});