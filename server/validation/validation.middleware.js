const { serverErrorResponse } = require('../utils');

const validattionMiddleware = (schema) => async (req, res, next) => {
    try {
        await schema.validateAsync(req.body);
        next();
    } catch (err) {
        serverErrorResponse(res, 400, { message: err.message });
    }
};

module.exports = validattionMiddleware;
