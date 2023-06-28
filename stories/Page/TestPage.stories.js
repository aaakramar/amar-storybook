import React from "react";
import { TestPage } from "./TestPage";

export default {
  title: "Test/TestPage",
  component: TestPage,
  tags: ["autodocs"],
  argTypes: {}
};

export const Default = (args) => <TestPage {...args} />;

// Default.args = {
//   error: false,
//   disabled: false,
//   readOnly: false,
//   placeholder: "Placeholder",
//   style: {},
// };
