# Dx Async Button

Button which follows an 'isPending' boolean to modify its appearance and state.

## Usage
```
<AsyncButton
  btnText='Click Me'
  isPending={pendingBool}
  isDisabled={disabledBool}
  pendingText='Processing...'
  btnAction={clickBtn}
  className='an-additional-class'
  btnAttrs={{
    type: 'button',
    name: 'async-button'
  }}
/>
```

## AsyncButton props
### `isPending: boolean`
A boolean to toggle the pending state of the button.

### `isDisabled: boolean`
A boolean to toggle the disabled state of the button.

### `btnText: string`
Default text within the button.

### `pendingText: string`
Button's text while button is in pending state

### `btnAction: function`
Function that will be called on the button's `onClick`

### `className: string`
Optional additional classname to be applied to the button

### `btnAttrs: object`
Optional hash of button attributes.
