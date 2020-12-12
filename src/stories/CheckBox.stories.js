import React from "react";
import { Checkbox } from "..";

export default {
  title: "Checkbox",
  component: Checkbox,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  onChange: console.log,
  value: "foo",
};

Secondary.args = {
  onChange: console.log,
  value: "bar",
  label: "lorem ipsum",
};
