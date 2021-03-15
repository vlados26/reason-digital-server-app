const AuthService = require('../services/auth-service');
const instanceAuthService = new AuthService();
const { createResponse, serverErrorResponse } = require('../utils');

class AuthController {
    signup = async (req, res) => {
        try {
            const { email, password } = req.body;
            await instanceAuthService.signup({ email, password });
            createResponse(res, 201, { message: 'User was created' });
        } catch (err) {
            serverErrorResponse(res, 500, { message: err.message });
        }
    };
    login = async (req, res) => {
        try {
            const { email, password } = req.body;
            const token = await instanceAuthService.login({
                email,
                password,
            });

            createResponse(res, 201, {
                token,
                email,
                message: 'Successfully logged in',
            });
        } catch (err) {
            serverErrorResponse(res, 500, { message: err.message });
        }
    };
}

module.exports = AuthController;
