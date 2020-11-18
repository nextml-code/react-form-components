# React Form Components

Some form components for React

## Installation

```
npm install @aiwizo/react-form-components
```

## Basic Usage


### Select
```JavaScript
import { Select } from '@aiwizo/react-form-components';

<Select 
  // All selectable options as
  // an array of objects
  options={[
    { name: "foo" },
    { name: "bar" },
    { name: "baz" },
    { name: "foo2" },
    { name: "bar2" },
    { name: "baz2" },
    { name: "foo3" },
    { name: "bar3" },
    { name: "baz3" },
  ]}

  // Function that returns what should
  // be rendered in the option component
  renderAs={(props, index) => {
    return props.name;
  }}

  // callback triggered when an option 
  // is selected
  onSelect={(option) => {
    console.log(option);
  }}

  // Set index of default value in the 
  // list of objects (defaults to 0)
  defaultIndex={2}
/>
```

