# Dx Flex Grid

Flex-container flex-wrapped grid of items.

A `FlexGrid` component wraps `GridItem` children, and those children have their own props.

## Usage
```
<FlexGrid>
  <GridItem itemWidth='small' spacing='large'>
    <div>
      <h1>I am the contents of the first flex-grid item</h1>
    </div>
  </GridItem>

  <GridItem itemWidth='small' spacing='large'>
    <div>
      <h1>I am the contents of the next flex-grid item</h1>
    </div>
  </GridItem>
</FlexGrid>
```

## FlexGrid props
### `children: node`
`GridItem` children.

## GridItem props
### `itemWidth: string (small | default | large | x-large)`
Width of the item in the grid.

### `spacing: string (small | default | large | x-large)`
Gutter spacing around each GridItem.
