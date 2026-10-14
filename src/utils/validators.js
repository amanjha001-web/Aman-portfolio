export const isValidEmail = (email = "") =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

export const isValidPhone = (phone = "") =>
  /^[+]?[\d\s()-]{7,20}$/.test(phone.trim());

export const isNotEmpty = (value = "") => String(value).trim().length > 0;

export const getFieldError = (name, value) => {
  if (!isNotEmpty(value)) {
    return `${name} is required.`;
  }

  if (name.toLowerCase() === "email" && !isValidEmail(value)) {
    return "Please enter a valid email address.";
  }

  return "";
};
