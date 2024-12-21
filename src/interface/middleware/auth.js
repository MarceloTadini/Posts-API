const config = require('../../config');
function auth(req, res, next) {
    if (req.headers.authorization === config.apiSecret) {
        next();
    } else {
        res.status(401).json({ error: 'Invalid authorization' });
    }
}

module.exports = auth;
