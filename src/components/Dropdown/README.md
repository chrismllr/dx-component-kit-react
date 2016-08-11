# Dx Dropdown

Standard Dropdown component.

## Usage
```
<Dropdown
  recordField='state'
  options={[ 'TX', 'PA' ]}
  onChange={selectState}
  placeholder='Select a state:'
  selectedValue={props.selectedState}
/>
```

## Dropdown props
### `recordField: string`
The field which the selected value of the dropdown correlates to.

### `onChange: function`
Function that will fire on the select menu's `onChange`

### `className: string`
Optional additional classname to be applied to the dropdown wrapper

### `options: arrayOf(string) | arrayOf(object)`
Array of options to choose from

### `selectedValue: string | object`
The selected option in the dropdown list

### `placeholder: string`
Text for the initial option in the dropdown list

### `dropdownAttrs: object`
Optional hash of `select` attributes
