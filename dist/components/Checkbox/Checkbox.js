(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '../../utils/conditional-class', '../../index.css'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('../../utils/conditional-class'), require('../../index.css'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.conditionalClass, global.index);
    global.Checkbox = mod.exports;
  }
})(this, function (exports, _react, _conditionalClass) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Checkbox = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _conditionalClass2 = _interopRequireDefault(_conditionalClass);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Checkbox = exports.Checkbox = function Checkbox(props) {
    var checkboxChange = function checkboxChange(event) {
      return props.onChange(props.recordField, event.target.checked);
    };

    var isChecked = function isChecked() {
      if (props.collection) {
        return props.collection.indexOf(props.value) >= 0;
      }

      return props.checked;
    };

    return _react2.default.createElement(
      'label',
      { className: props.className + ' Checkbox__label', htmlFor: props.recordField },
      _react2.default.createElement('input', { className: 'Checkbox__input',
        type: 'checkbox',
        id: props.recordField,
        value: props.value,
        onChange: checkboxChange,
        checked: isChecked()
      }),
      _react2.default.createElement(
        'span',
        { className: 'Checkbox__box ' + (0, _conditionalClass2.default)(isChecked(), 'Checkbox__boxChecked') },
        _react2.default.createElement(
          'i',
          { className: 'material-icons' },
          'check'
        )
      ),
      props.label
    );
  };

  Checkbox.propTypes = {
    label: _react.PropTypes.string,
    className: _react.PropTypes.string,
    recordField: _react.PropTypes.string,
    checked: _react.PropTypes.bool,
    onChange: _react.PropTypes.func,
    collection: _react.PropTypes.arrayOf(_react.PropTypes.string),
    value: _react.PropTypes.any
  };

  exports.default = Checkbox;
});