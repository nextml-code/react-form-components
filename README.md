# React Form Components

Some form components for React

## Installation

```
npm install @aiwizo/react-form-components
```

## Basic Usage


### Select
```JavaScript
import { Select } from '@codewell/react-form-components';

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

  // The key on each object that should
  // be displayed in the options list
  display="name"

  // Callback triggered when an option 
  // is selected
  callback={(option) => {
    console.log(option);
  }}
/>
```

