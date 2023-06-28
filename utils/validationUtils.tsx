export const validateEmail = (value: string): string | null => {
  if (value === "") {
    return "Email is required";
  } else if (!/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value)) {
    return "Invalid Email Address";
  }

  return null;
};
