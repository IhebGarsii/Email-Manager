const isEmpty = require("./isEmpty");
const validator = require("validator");
module.exports = function validateUser(data) {
  let errors = {};
  data.Email = !isEmpty(data.Email) ? data.Email : "";
  data.LastName = !isEmpty(data.LastName) ? data.LastName : "";
  data.FirstName = !isEmpty(data.FirstName) ? data.FirstName : "";
  data.Age = !isEmpty(data.Age) ? data.Age : "";
  if (!validator.isEmail(data.Email)) {
    errors.Email = "FORMAT Email required ";
  }
  if (validator.isEmpty(data.Email)) {
    errors.Email = "required Email ";
  }
  if (validator.isEmpty(data.LastName)) {
    errors.LastName = "required LastName ";
  }
  if (validator.isEmpty(data.FirstName)) {
    errors.FirstName = "required FirstName ";
  }
  if (validator.isEmpty(data.Age)) {
    errors.Age = "required Age";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
