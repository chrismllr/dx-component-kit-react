import React, { PropTypes, Component } from 'react';
import TextInput from 'components/TextInput';
import classes from './OTInput.scss';
import MaterialIcon from 'components/MaterialIcon';
import DisclaimerText from 'components/DisclaimerText';
import { trimWhitespace, noop } from 'utils/js-utils';
import * as validators from 'helpers/Validators';
import * as formatters from 'helpers/FormatInput';
import secureLock from './static/lock_checkmark.png';

export class OTInput extends Component {
  props: OTInputProps;

  constructor (props) {
    super(props);

    this.state = {
      isDirty: false
    };
  }

  isValid: Function = (testVal, cb) => {
    const validate = this.props.validate || [];

    cb(validate.reduce((memo, currentValidator) =>
      memo.concat(validators[currentValidator](testVal)), []));
  };

  inputBlur: Function = (event) => {
    const { addValidationErrors = noop } = this.props;

    this.setState({ isDirty: false });

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }

    this.props.onChange(this.props.recordField, trimWhitespace(this.props.value));

    this.isValid(trimWhitespace(this.props.value), (errors) =>
      addValidationErrors({ field: this.props.recordField, errors }));
  };

  inputFocus: Function = (event) => {
    if (this.props.formatInput) {
      this.props.onChange(
        this.props.recordField,
        formatters[this.props.formatInput](event.target, null)
      );
    }

    if (this.props.formatElement) {
      formatters[this.props.formatElement](event.target, null);
      this.props.onChange(this.props.recordField, event.target.value);
    }

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  inputOnKeyUp: Function = (event) => {
    if (this.props.formatInput) {
      this.props.onChange(
        this.props.recordField,
        formatters[this.props.formatInput](event.target, event.which)
      );
    }

    if (this.props.formatElement) {
      formatters[this.props.formatElement](event.target, event.which);
      this.props.onChange(this.props.recordField, event.target.value);
    }

    if (this.props.onKeyUp) {
      this.props.onKeyUp(event);
    }
  };

  inputChange: Function = (event, rf, isDirty) => {
    const { addValidationErrors = noop } = this.props;

    this.setState({
      isDirty: true
    });

    this.isValid(event.target.value, (errors) =>
      addValidationErrors({ field: this.props.recordField, errors }));

    this.props.onChange(rf, event.target.value, isDirty);
  };

  toggleInputType: Function = () => {
    this.props.toggleType(this.props.recordField);
  };

  inputClass: Function = () => {
    const { validationErrors = [], inputAttrs = {} } = this.props;
    const hasAnIcon = this.props.isPassword || this.props.isSecure;
    const hasValidationButNotDirty = validationErrors.length && !this.state.isDirty;
    const passwordsDoMatch = this.props.isPassword && this.props.passwordsMatch === true;
    const passwordsDontMatch = this.props.isPassword && this.props.passwordsMatch === false && !this.state.isDirty;

    const cls = [classes.otInput, this.props.className];

    if (hasAnIcon) {
      cls.push(classes.hasIcon);
    }

    if (hasValidationButNotDirty) {
      cls.push(classes['otInput--error']);
    }

    if (passwordsDoMatch) {
      cls.push(classes['otInput--success']);
    }

    if (passwordsDontMatch) {
      cls.push(classes['otInput--error']);
    }

    if (inputAttrs.disabled) {
      cls.push(classes['otInput--disabled']);
    }

    return cls.toString().replace(/,/g, ' ');
  };

  render () {
    const { inputAttrs = {} } = this.props;

    return (
      <div style={{ textAlign: 'left' }}>
        <div className={`ot-input ${this.inputClass()}`}>
          {this.props.label
            ? <label htmlFor={this.props.inputAttrs.name || this.props.recordField}>{this.props.label}</label>
            : null
          }

          <TextInput
            value={this.props.value}
            recordField={this.props.recordField}
            className={classes.otInput__field}
            onChange={this.inputChange}
            onBlur={this.inputBlur}
            onFocus={this.inputFocus}
            onKeyUp={this.inputOnKeyUp}
            inputAttrs={inputAttrs} />

          {this.props.isPassword && this.props.inputAttrs.type === 'text'
            ? <a onClick={this.toggleInputType}>
              <MaterialIcon
                iconName='visibility'
                className={classes.passwordEyeVisible} />
            </a>
            : null
          }

          {this.props.isPassword && inputAttrs.type === 'password'
            ? <a onClick={this.toggleInputType}>
              <MaterialIcon
                iconName='visibility_off'
                className={classes.passwordEye} />
            </a>
            : null
          }

          {this.props.isSecure
            ? <img
              className={classes.isSecureIcon}
              src={secureLock} />
            : null
          }
        </div>

        <DisclaimerText text={this.props.disclaimerText} />
      </div>
    );
  }

};

OTInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  recordField: PropTypes.string,
  validate: PropTypes.arrayOf(PropTypes.string),
  validationErrors: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  inputAttrs: PropTypes.object,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyUp: PropTypes.func,
  toggleType: PropTypes.func,
  addValidationErrors: PropTypes.func,
  formatInput: PropTypes.string,
  formatElement: PropTypes.string,
  disclaimerText: PropTypes.string,
  isSecure: PropTypes.bool,
  isPassword: PropTypes.bool,
  passwordsMatch: PropTypes.any

};

type OTInputProps = {
  label: string,
  value: any,
  recordField: string,
  validate: string[],
  validationErrors: string[],
  className?: string,
  inputAttrs?: Object,
  onChange: Function,
  onFocus: Function,
  onBlur: Function,
  onKeyUp: Function,
  addValidationErrors: Function,
  formatInput: string,
  formatElement: string,
  disclaimerText: string,
  isSecure: boolean,
  isPassword: boolean,
  passwordsMatch: any
};

export default OTInput;
