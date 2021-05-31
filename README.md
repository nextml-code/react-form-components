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
  ]}

  // Function that returns what should
  // be rendered in the option component
  renderAs={(props, index) => {
    return props.name;
  }}

  // callback triggered when an option
  // is selected
  onSelect={(option) => { /* Do something */ }}

  // Set index of default value in the
  // list of options (defaults to 0)
  defaultIndex={2}
/>
```

```JavaScript
import { Button } from '@aiwizo/react-form-components';

<Button
  // Sets the background color
  // for default button style
  // Available options: red, blue, green
  color="green"

  // Optional parameter that sets
  // the button to "secondary" type
  // If not set, it uses default settings.
  type="secondary"
/>
```

```JavaScript
import { Checkbox } from '@aiwizo/react-form-components';

<Checkbox
  // Callback function triggered whenever the
  // checkbox is clicked
  onChange={({checked, value}) => { /* Do something */ }}

  // Value that is passed to the onChange
  // callback
  value="some value"

  // Optional label displayed to the
  // right of the checkbox
  label="Lorem Ipsum"
/>
```

```JavaScript
import { Input } from '@aiwizo/react-form-components';

<Input
  // Icon that appears to the left
  // for indicating input type/purpose
  icon={ /* Font awesome icon */ }

  // Optional label displayed on
  // top of the right of the input
  label="Lorem Ipsum"

  // ...regular input fields
/>
```

```JavaScript
import { Label } from '@aiwizo/react-form-components';

<Label>Lorem ipsum</Label>
```
