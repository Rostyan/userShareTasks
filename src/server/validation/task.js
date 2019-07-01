const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateTaskInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.field = !isEmpty(data.field) ? data.field : "";

  // task checks
  if (Validator.isEmpty(data.task)) {
    errors.field = "Task field is required";
  }

  if (!Validator.isLength(data.field, { min: 5, max: 100 })) {
    errors.field = "Task must be at least 6 characters";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
