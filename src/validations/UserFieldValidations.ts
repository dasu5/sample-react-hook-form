export const UserFieldValidations = {
  firstName: {
    required: {
      value: true,
      message: "Please enter the First Name",
    },
    pattern: {
      value: /^[A-Za-z]+$/,
      message: "Please enter letters only",
    },
    maxLength: {
      value: 15,
      message: "Character limit exceeded",
    },
  },
  lastName: {
    required: {
      value: true,
      message: "Please enter the Last Name",
    },
    pattern: {
      value: /^[A-Za-z]+$/,
      message: "Please enter letters only",
    },
    maxLength: {
      value: 15,
      message: "Character limit exceeded",
    },
  },
  email: {
    required: {
      value: true,
      message: "Please enter the Email",
    },
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: "Please enter a valid email",
    },
  },
  address: {
    required: {
      value: true,
      message: "Please enter the Address",
    },
    maxLength: {
      value: 100,
      message: "Character limit exceeded",
    },
  },
  age: {
    required: {
      value: true,
      message: "Please enter the Age",
    },
    maxLength: {
      value: 2,
      message: "Character limit exceeded",
    },
  },
};
