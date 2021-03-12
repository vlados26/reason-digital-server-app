const AuthService = require('../services/auth-service');
const instanceAuthService = new AuthService();

class AuthController {
    signup = async (req, res) => {
        try {
            const { email, password } = req.body;
            await instanceAuthService.signup({ email, password });
            res.status(201).send({ message: 'User was created' });
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    };
    login = async (req, res) => {
        try {
            const { email, password } = req.body;
            const token = await instanceAuthService.login({
                email,
                password,
            });

            res.status(201).send({
                token,
                email,
                message: 'Successfully logged in',
            });
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    };
}

module.exports = AuthController;
