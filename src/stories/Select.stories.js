import React from "react";
import { Select } from "..";

export default {
  title: "Select",
  component: Select,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Select {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  options: [
    { name: "foo" },
    { name: "bar" },
    { name: "baz" },
    { name: "foo2" },
    { name: "bar2" },
    { name: "baz2" },
    { name: "foo3" },
    { name: "bar3" },
    { name: "baz3" },
  ],
  renderAs: (props, index) => props.name,
  callback: (option) => {
    console.log(option);
  },
};
