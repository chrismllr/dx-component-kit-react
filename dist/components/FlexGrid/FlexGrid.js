(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.FlexGrid = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.FlexGrid = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var FlexGrid = exports.FlexGrid = function FlexGrid(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
      'div',
      { className: 'FlexGrid__grid' },
      children
    );
  };

  FlexGrid.propTypes = {
    children: _react.PropTypes.node
  };

  exports.default = FlexGrid;
});