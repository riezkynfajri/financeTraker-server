module.exports = function errorHandler(err, req, res, next) {
  let code = 500,
    message = "Internal Server Error";
  console.log(err);
  if (err.name === "ValidationError") {
    code = 400;
    const { errors } = err;
    const msg = [];
    for (const key in errors) {
      msg.push(errors[key].properties.message);
    }
    message = msg;
  } else if (err.message === 'name') {
    code = 400;
    message = 'Name is required';
  } else if (err.message === 'password') {
    code = 400;
    message = 'Password is required';
  } else if (err.message === 'invalid') {
    code = 401;
    message = 'Invalid email/password';
  } else if (err.message === 'user not found' || err.name === 'JsonWebTokenError') {
    code = 401;
    message = "You're Unauthorized";
  }

  res.status(code).json({ error: { message } });
};
