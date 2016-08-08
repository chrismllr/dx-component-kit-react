/* @flow */
import React from 'react';

export const TextInput = (props: TextInputProps) => {
  const inputChange: Function = (event) =>
    props.onChange(event, props.recordField);

  const inputAttrs = props.inputAttrs || {};

  return (
    <input id={inputAttrs.name || props.recordField}
      type={inputAttrs.type || 'text'}
      role='textbox'
      name={inputAttrs.name || props.recordField}
      className={props.className}
      value={props.value}
      disabled={props.disabled}
      onChange={inputChange}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      onKeyUp={props.onKeyUp}
      onKeyDown={props.onKeyDown}
      {...inputAttrs} />
  );
};

type TextInputProps = {
  value: any,
  recordField: string,
  className?: string,
  inputAttrs?: Object,
  disabled?: boolean,
  onChange: Function,
  onFocus: Function,
  onBlur: Function,
  onKeyUp: Function,
  onKeyDown: Function
}

export default TextInput;
