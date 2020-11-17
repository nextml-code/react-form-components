import React from "react";
import { Select } from "..";

export default {
  title: "Select",
  component: Select,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Select {...args} />;

export const Primary = Template.bind({});

const options = [
  { name: "foo" },
  { name: "bar" },
  { name: "baz" },
  { name: "foo2" },
  { name: "bar2" },
  { name: "baz2" },
  { name: "foo3" },
  { name: "bar3" },
  { name: "baz3" },
];

Primary.args = {
  options,
  renderAs: (props, index) => props.name,
  onSelect: (option) => {
    console.log(option);
  },
  defaultValue: options[0].name,
};
