import React from "react";
import { DropdownButton } from "./DropdownButton";

export default {
  title: "Design System/Atoms/DropdownButton",
  component: DropdownButton,
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = (args) => <DropdownButton {...args} />;

Default.args = {
  btnName: "SELECT",
  dropDownItems: [
    { name: "Individual", drawer: false, value: "Individual" },
    { name: "Bulk Share", drawer: true, value: "Bulk Share" },
  ],
};
