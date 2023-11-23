import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
const meta: Meta<typeof Button> = {
  component: Button,
  title: "Marbella/Button",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    text: 'Button',
  },
};
export const Secondary: Story = {
    args: {
     primary: false,
     text: 'Submit',
    },
  };