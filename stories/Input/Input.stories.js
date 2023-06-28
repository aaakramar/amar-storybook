import { Input } from "./Input";
import React from "react";

export default {
  title: "Design System/Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    error: {
      table: {
        type: {
          summary: ["Set error status"],
        },
        defaultValue: { summary: false },
      },
    },
    disabled: {
      table: {
        type: {
          summary: ["Whether the input is disabled"],
        },
        defaultValue: { summary: false },
      },
    },
    placeholder: {
      table: {
        type: {
          summary: [
            "Specifies a short hint that describes the expected value ",
          ],
        },
      },
    },
    onChange: {
      table: {
        type: {
          summary: ["Callback when user input"],
        },
      },
    },
    readOnly: {
      table: {
        type: {
          summary: [
            "A read-only input field cannot be modified (however, a user can tab to it, highlight it, and copy the text from it).",
          ],
        },
        defaultValue: { summary: false },
      },
    },
    style: {
      table: {
        type: {
          summary: ["Override the component's default styles"],
        },
      },
    },
  },
};

export const Default = (args) => <Input {...args} />;
export const Disabled = (args) => <Input {...args} />;
export const Error = (args) => <Input {...args} />;
export const ReadOnly = (args) => <Input {...args} />;

Default.args = {
  error: false,
  disabled: false,
  readOnly: false,
  placeholder: "Placeholder",
  style: {},
};

Disabled.args = {
  disabled: true,
};

Error.args = {
  error: true,
};

ReadOnly.args = {
  readOnly: true,
  ass: "re",
};

// export const Default = {
// args: {
//   error: false,
//   disabled: false,
//   readOnly: false,
//   placeholder: "Placeholder",
//   style: {}
// },
// };

// export const Disabled = {
//   args: {
//     // error: false,
//     disabled: true,
//     // readOnly: false,
//   },
// };
