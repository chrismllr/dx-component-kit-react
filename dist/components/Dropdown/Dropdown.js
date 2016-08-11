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
    global.Dropdown = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Dropdown = undefined;

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

  var Dropdown = exports.Dropdown = function Dropdown(_ref) {
    var selectedValue = _ref.selectedValue;
    var recordField = _ref.recordField;
    var _ref$options = _ref.options;
    var options = _ref$options === undefined ? [] : _ref$options;
    var className = _ref.className;
    var onChange = _ref.onChange;
    var placeholder = _ref.placeholder;
    var _ref$dropdownAttrs = _ref.dropdownAttrs;
    var dropdownAttrs = _ref$dropdownAttrs === undefined ? {} : _ref$dropdownAttrs;

    var dropdownChange = function dropdownChange(event) {
      return onChange(recordField, event.target.value);
    };

    return _react2.default.createElement(
      'div',
      { className: 'Dropdown ' + className },
      _react2.default.createElement(
        'select',
        _extends({
          className: 'Dropdown__select',
          id: recordField,
          value: selectedValue,
          onChange: dropdownChange
        }, dropdownAttrs),
        _react2.default.createElement(
          'option',
          { value: '' },
          placeholder || 'Select an option'
        ),
        options.map(function (option, i) {
          return _react2.default.createElement(
            'option',
            { key: i, value: option },
            option
          );
        })
      ),
      _react2.default.createElement(
        'i',
        { className: 'material-icons' },
        'arrow_drop_down'
      )
    );
  };

  Dropdown.propTypes = {
    recordField: _react.PropTypes.string,
    selectedValue: _react.PropTypes.any,
    onChange: _react.PropTypes.func,
    className: _react.PropTypes.string,
    options: _react.PropTypes.string,
    placeholder: _react.PropTypes.string,
    dropdownAttrs: _react.PropTypes.object
  };

  exports.default = Dropdown;
});