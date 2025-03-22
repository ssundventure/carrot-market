export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_REGEX = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).+$/
);

export const PASSWORD_MIN_LENGTH_ERROR_MSG = `Password must contain at least ${PASSWORD_MIN_LENGTH} characters`;


export const PASSWORD_REGEX_ERROR_MSG =
  "Passwords must contain at least one UPPERCASE, lowercase, number and special characters #?!@$%^&*-";
