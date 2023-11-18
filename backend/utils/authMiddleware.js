const { verifyToken } = require("./jwt");

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if(token){
        const decoded = verifyToken(token);
        req.user = decoded;

        next();
    } else {
        res.status(401).json({message: 'Unauthorized user'})
    }
}

module.exports = authMiddleware;