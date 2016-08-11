# Dx Checkbox

Standard Checkbox component. There are two ways to use:

## Single Checkbox
```
<Checkbox
  label='Add Edamame ($1.00)'
  onChange={checkedEdamame}
  recordField='wantsEdamame'
  checked={wantsEdamame}
/>
```

## Collection
```
{options.map((curOption, i) => (
  <Checkbox
    key={i}
    label={curOption}
    onChange={optionChecked}
    recordField='selectedOptions'
    value={curOption}
    collection={options}
  />
))}
```

## Checkbox props
### `label: string`
Label for the checkbox

### `recordField: string`
The field which the value of the checkbox correlates to.

### `onChange: function`
Function that will fire on the checkbox's `onChange`

### `className: string`
Optional additional classname to be applied to the checkbox wrapper

### When being used in Single-checkbox mode
### `checked: boolean`
A boolean to tell the checkbox to be checked.

### When being used in Collection mode
### `collection: arrayOf(string) | arrayOf(object)`
The collection of objects / strings that this checkbox is selectable from.

### `value: string | object`
The item in the collection that correlates to this individual checkbox.
