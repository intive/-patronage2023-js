import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "ui";

//delete when Icon component is done and implemented
import "material-symbols";
import styled from "styled-components";

type IconStyled = {
  type?: string;
} & React.HTMLProps<HTMLSpanElement>;

const Icon = ({ type }) => {
  return <IconStyled className="material-symbols-rounded">{type}</IconStyled>;
};

const IconStyled = styled.span<IconStyled>`
  margin: -10px;
`;
// end of section to delete

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: { control: "radio", options: ["primary", "secondary", "simple"] },
    fullWidth: { control: "boolean" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  variant: "primary",
  disabled: false,
  fullWidth: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary",
  variant: "secondary",
  disabled: false,
  fullWidth: false,
};

export const Simple = Template.bind({});
Simple.args = {
  children: "Simple",
  variant: "simple",
  disabled: false,
  fullWidth: false,
};

export const PrimaryFullWidth = Template.bind({});
PrimaryFullWidth.args = {
  children: "Primary FullWidth",
  variant: "primary",
  disabled: false,
  fullWidth: true,
};

export const SecondaryFullWidth = Template.bind({});
SecondaryFullWidth.args = {
  children: "Secondary FullWidth",
  variant: "secondary",
  disabled: false,
  fullWidth: true,
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  children: "Primary Disabled",
  variant: "primary",
  disabled: true,
  fullWidth: false,
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  children: "Secondary Disabled",
  variant: "secondary",
  disabled: true,
  fullWidth: false,
};

export const SimpleDisabled = Template.bind({});
SimpleDisabled.args = {
  children: "Simple Disabled",
  variant: "simple",
  disabled: true,
  fullWidth: false,
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  children: (
    <>
      Primary with Icon
      <Icon type="arrow_drop_down"></Icon>
    </>
  ),
};
