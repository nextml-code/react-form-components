import {
  faAddressBook,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Input } from "..";

export default {
  title: "Input",
  component: Input,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
export const PrimaryWithLabel = Template.bind({});
export const PrimaryWithoutIcon = Template.bind({});
export const PrimaryWithoutIconAndLabel = Template.bind({});

Primary.args = {
  onChange: console.log,
  icon: faSearch,
};

PrimaryWithLabel.args = {
  label: "Lorem Ipsum",
  placeholder: "Some placeholder",
  onChange: console.log,
  icon: faUser,
};

PrimaryWithoutIcon.args = {
  label: "Some label",
  onChange: console.log,
};

PrimaryWithoutIconAndLabel.args = {
  onChange: console.log,
};
