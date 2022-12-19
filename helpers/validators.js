const bcrypt = require("bcrypt");

const hashPass = (password) => {
  console.log(password);
  return bcrypt.hashSync(password, 10);
};

const comparePass = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

module.exports = { hashPass, comparePass };
