(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './components/AsyncButton/AsyncButton', './components/Checkbox/Checkbox', './components/Dropdown/Dropdown', './components/FlashMessage/FlashMessage'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./components/AsyncButton/AsyncButton'), require('./components/Checkbox/Checkbox'), require('./components/Dropdown/Dropdown'), require('./components/FlashMessage/FlashMessage'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.AsyncButton, global.Checkbox, global.Dropdown, global.FlashMessage);
    global.index = mod.exports;
  }
})(this, function (exports, _AsyncButton, _Checkbox, _Dropdown, _FlashMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.FlashMessage = exports.Dropdown = exports.Checkbox = exports.AsyncButton = undefined;

  var _AsyncButton2 = _interopRequireDefault(_AsyncButton);

  var _Checkbox2 = _interopRequireDefault(_Checkbox);

  var _Dropdown2 = _interopRequireDefault(_Dropdown);

  var _FlashMessage2 = _interopRequireDefault(_FlashMessage);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.AsyncButton = _AsyncButton2.default;
  exports.Checkbox = _Checkbox2.default;
  exports.Dropdown = _Dropdown2.default;
  exports.FlashMessage = _FlashMessage2.default;
});