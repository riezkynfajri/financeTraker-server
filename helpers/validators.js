const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const hashPass = (password) => bcrypt.hashSync(password, 10);

const comparePass = (password, hash) => bcrypt.compareSync(password, hash);

const createToken = (data) => jwt.sign(data, process.env.SECRET_CODE);

const readToken = (data) => jwt.verify(data, process.env.SECRET_CODE);

module.exports = { hashPass, comparePass, createToken, readToken };
