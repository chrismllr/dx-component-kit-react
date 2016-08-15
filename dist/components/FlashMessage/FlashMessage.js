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
    global.FlashMessage = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.FlashMessage = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var FlashMessage = exports.FlashMessage = function FlashMessage(_ref) {
    var _ref$type = _ref.type;
    var type = _ref$type === undefined ? 'error' : _ref$type;
    var messageText = _ref.messageText;
    var messageHeader = _ref.messageHeader;
    var closeFlash = _ref.closeFlash;

    var computedCls = function computedCls() {
      var cls = ['flashMessage', 'flashMessage--' + type];
      return cls.toString().replace(/,/g, ' ');
    };

    var computedIcon = function computedIcon() {
      switch (type) {
        case 'error':
          return 'highlight_off';
        case 'success':
          return 'check_circle';
        case 'warning':
          return 'warning';
        default:
          return 'warning';
      }
    };

    return _react2.default.createElement(
      'div',
      { className: computedCls() },
      _react2.default.createElement(
        'i',
        { className: 'material-icons flashMessageIcon' },
        computedIcon()
      ),
      _react2.default.createElement(
        'div',
        { className: 'flashMessageContent' },
        _react2.default.createElement(
          'h5',
          null,
          messageHeader
        ),
        _react2.default.createElement(
          'p',
          null,
          messageText
        )
      ),
      _react2.default.createElement(
        'a',
        { onClick: closeFlash, className: 'flashMessageClose' },
        _react2.default.createElement(
          'i',
          { className: 'material-icons' },
          'close'
        )
      )
    );
  };

  FlashMessage.propTypes = {
    type: _react.PropTypes.string,
    messageText: _react.PropTypes.string,
    messageHeader: _react.PropTypes.string,
    closeFlash: _react.PropTypes.func
  };

  exports.default = FlashMessage;
});