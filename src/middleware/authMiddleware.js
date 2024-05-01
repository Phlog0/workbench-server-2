import jwt from 'jsonwebtoken';
import jsonwbtknConfig from '../controllers/AuthController/config.js';
function authMiddleware(req, res, next) {

    if (req.method === 'OPTIONS') next()

    try {


        const token = req.headers.authorization.split(' ')[1];
        if (!token) return res.status(403).json({ message: 'Пользователь не авторизован' })


        const decodedData = jwt.verify(token, jsonwbtknConfig.secret)
        req.user = decodedData;
        next()
    } catch (error) {
        console.log(error);
        return res.status(403).json({ message: 'Пользователь не авторизован' })
    }
}


export default authMiddleware