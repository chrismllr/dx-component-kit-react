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
    global.GridItem = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.GridItem = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var GridItem = exports.GridItem = function GridItem(_ref) {
    var children = _ref.children;
    var _ref$spacing = _ref.spacing;
    var spacing = _ref$spacing === undefined ? 'default' : _ref$spacing;
    var _ref$itemWidth = _ref.itemWidth;
    var itemWidth = _ref$itemWidth === undefined ? 'default' : _ref$itemWidth;

    var computedClass = function computedClass() {
      var classes = ['FlexGrid__item'];

      classes.push('FlexGrid__item--' + itemWidth);
      classes.push('FlexGrid__item--gutter--' + spacing);

      return classes.toString().replace(/,/g, ' ');
    };

    return _react2.default.createElement(
      'div',
      { className: computedClass() },
      children
    );
  };

  GridItem.propTypes = {
    children: _react.PropTypes.node,
    spacing: _react.PropTypes.string,
    itemWidth: _react.PropTypes.string
  };

  exports.default = GridItem;
});