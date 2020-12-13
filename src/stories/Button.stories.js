import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "..";

export default {
  title: "Button",
  component: Button,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => (
  <Button {...args}>
    <FontAwesomeIcon icon={faAddressBook} /> Lorem
  </Button>
);

export const Primary = Template.bind({});
export const PrimaryRed = Template.bind({});
export const PrimaryGreen = Template.bind({});
export const PrimaryBlue = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {};

PrimaryRed.args = {
  color: "red",
};

PrimaryGreen.args = {
  color: "green",
};

PrimaryBlue.args = {
  color: "blue",
};

Secondary.args = {
  type: "secondary",
};
