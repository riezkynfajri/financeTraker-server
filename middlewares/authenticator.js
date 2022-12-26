const { readToken } = require("../helpers/validators"),
    User = require("../models/User");

module.exports = async function authenticator(req, res, next) {
    try {
        const { access_token } = req.headers;
        if (!access_token) throw new Error('user not found');

        const payload = readToken(access_token);
        const foundUser = await User.findById({ _id: payload.id });
        if (!foundUser) throw new Error('user not found');

        req.userData = {
            _id: foundUser.id
        };
        next();
    } catch (err) {
        next(err);
    }
};