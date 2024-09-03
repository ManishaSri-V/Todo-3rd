const Joi = require("joi");

const validate = (schema) => {
  const { error } = schema.validate(error);

  if (error) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  } else {
    next();
  }
};

module.exports = { validate };
