import React from "react";
import { Label } from "..";

export default {
  title: "Label",
  component: Label,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (_) => <Label>Lorem ipsum</Label>;

export const Primary = Template.bind({});

Primary.args = {};
