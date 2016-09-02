(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './FlexGrid', './GridItem'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./FlexGrid'), require('./GridItem'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.FlexGrid, global.GridItem);
    global.index = mod.exports;
  }
})(this, function (exports, _FlexGrid, _GridItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.GridItem = exports.FlexGrid = undefined;

  var _FlexGrid2 = _interopRequireDefault(_FlexGrid);

  var _GridItem2 = _interopRequireDefault(_GridItem);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.FlexGrid = _FlexGrid2.default;
  exports.GridItem = _GridItem2.default;
});