import React from "react";
import { Select } from "..";

export default {
  title: "Select",
  component: Select,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Select {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

const options = [
  { name: "foo" },
  { name: "bar" },
  { name: "baz" },
  { name: "FOO2" },
  { name: "bar2" },
  { name: "baz2" },
  { name: "foo3" },
  { name: "bAr3" },
  { name: "baz3" },
];

Primary.args = {
  options,
  renderAs: (props, index) => {
    console.log(index);
    return props.name;
  },
  onSelect: (option) => {
    console.log(option);
  },
  defaultIndex: 1,
};

Secondary.args = {
  options,
  renderAs: (props, index) => {
    console.log(index);
    return props.name;
  },
  onSelect: (option) => {
    console.log(option);
  },
};
