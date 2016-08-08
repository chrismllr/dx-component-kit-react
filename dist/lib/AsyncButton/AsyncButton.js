(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '../../../utils/js-utils', '../../styles/app.scss'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('../../../utils/js-utils'), require('../../styles/app.scss'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.jsUtils, global.app);
    global.AsyncButton = mod.exports;
  }
})(this, function (exports, _react, _jsUtils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AsyncButton = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var AsyncButton = exports.AsyncButton = function AsyncButton(_ref) {
    var _ref$isPending = _ref.isPending;
    var isPending = _ref$isPending === undefined ? false : _ref$isPending;
    var _ref$isDisabled = _ref.isDisabled;
    var isDisabled = _ref$isDisabled === undefined ? false : _ref$isDisabled;
    var _ref$btnText = _ref.btnText;
    var btnText = _ref$btnText === undefined ? 'Click here' : _ref$btnText;
    var _ref$pendingText = _ref.pendingText;
    var pendingText = _ref$pendingText === undefined ? 'Processing your request...' : _ref$pendingText;
    var className = _ref.className;
    var _ref$btnAttrs = _ref.btnAttrs;
    var btnAttrs = _ref$btnAttrs === undefined ? {} : _ref$btnAttrs;
    var _ref$btnAction = _ref.btnAction;
    var btnAction = _ref$btnAction === undefined ? _jsUtils.noop : _ref$btnAction;

    var computedCls = function computedCls() {
      var cls = ['btn', className];

      if (isPending || isDisabled) {
        cls.push('btn--pending');
      } else {
        cls.push('btn--default');
      }

      return cls.toString().replace(/,/g, ' ');
    };

    var computedTxt = isPending ? pendingText : btnText;

    return _react2.default.createElement(
      'button',
      _extends({}, btnAttrs, {
        className: computedCls(),
        onClick: btnAction,
        disabled: isDisabled || isPending
      }),
      computedTxt
    );
  };

  AsyncButton.propTypes = {
    isPending: _react.PropTypes.bool,
    isDisabled: _react.PropTypes.bool,
    btnText: _react.PropTypes.string,
    pendingText: _react.PropTypes.string,
    className: _react.PropTypes.string,
    btnAttrs: _react.PropTypes.object,
    btnAction: _react.PropTypes.func
  };

  exports.default = AsyncButton;
});