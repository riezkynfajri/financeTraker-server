module.exports = function errorHandler(err, req, res, next) {
  let code = 500;
  let message = "Internal Server Error";
  if (err.name === "ValidationError") {
    code = 400;
    const { errors } = err;
    const msg = [];
    for (const key in errors) {
      msg.push(errors[key].properties.message);
    }

    message = msg;
  }
  res.status(code).json({ error: { message } });
};
