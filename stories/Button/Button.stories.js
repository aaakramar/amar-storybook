import { Button } from "./Button";

export default {
  title: "Design System/Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    type: {
      table: {
        type: {
          summary: "Set the type of the button",
        },
      },
      default: "primary",
    },
    label: {
      table: {
        type: {
          summary: "Set the label text of the button",
        },
      },
    },
    backgroundColor: {
      table: {
        type: {
          summary: "Set the background color of button",
        },
      },
      control: "color",
    },
    disabled: {
      table: {
        type: {
          summary: "Disabled state of button",
        },
      },
      type: "boolean",
      default: false,
    },
    fontColor: {
      table: {
        type: {
          summary: "Set the font color of the button",
        },
      },
      control: "color",
    },
    onClick: {
      table: {
        type: {
          summary: "Set the handler to handle click event",
        },
      },
    },
    size: {
      table: {
        type: {
          summary: "Set the size of the button",
        },
      },
      control: {
        type: "select",
      },
      options: ["small", "medium", "large"],
    },
    width: {
      table: {
        type: {
          summary: "Set the width of the button",
        },
      },
      type: "string",
    },
    loading: {
      table: {
        type: {
          summary: "Set the loading state of the button",
        },
      },
      control: {
        type: "boolean",
      },
    },
  },
};

export const Primary = {
  args: {
    type: "primary",
    label: "Button",
  },
};

export const Secondary = {
  args: {
    type: "secondary",
    label: "Button",
  },
};

export const Danger = {
  args: {
    type: "danger",
    label: "Button",
  },
};

export const Disabled = {
  args: {
    type: "primary",
    label: "Button",
    disabled: true,
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
};
