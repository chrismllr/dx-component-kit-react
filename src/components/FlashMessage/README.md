# Dx Flash Message

Fixed tile notification message, slides in from side or top of viewport.

**Note:** The show/hide state of the message is determined by the parent component.

## Usage
```
{props.showFlashMessage
  ? <FlashMessage
    type='error'
    messageHeader='Oops!'
    messageText='That didn\'t quite go as we had hoped.'
    closeFlash={this.toggleFlashMsg}
  />
  :
}
```

## FlashMessage props
### `type: string ('error' | 'warning' | 'success')`
Theme for the flash message. Can be one of the three above themes.

### `messageHeader: string`
Header text of the flash message.

### `messageText: string`
Content / body of the flash message.

### `closeFlash: function`
Action triggered by the `X` in the flash message, to toggle top level `showFlash` boolean.
