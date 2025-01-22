import validator from "validator";

export const validation = (e, setErrors) => {
  const { name, value } = e.target;
  let error = "";
  switch (name) {
    case "firstName":
      if (!validator.isAlpha(value, "en-US", { ignore: " " })) {
        error = "Invalid name format";
      }
      break;
    case "lastName":
      if (!validator.isAlpha(value, "en-US", { ignore: " " })) {
        error = "Invalid name format";
      }
      break;
    case "userName":
      if (!validator.isAlphanumeric(value, "en-US", { ignore: "_" })) {
        error = "Invalid user name format";
      }
      break;
    case "email":
      if (!validator.isEmail(value)) {
        error = "Invalid email format";
      }
      break;
    case "phoneNumber":
      if (!validator.isMobilePhone(value, "any", { strictMode: true })) {
        error = "Invalid phone number format";
      }
      break;
    case "gender":
      if (!/^[A-Za-z ]+$/.test(value)) {
        error = "Invalid gender format";
      }
      break;
    default:
      break;
  }
  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: error,
  }));
};
