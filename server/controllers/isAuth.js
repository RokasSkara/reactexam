/* Verifies JWT token  */

import jwt from 'jsonwebtoken'

let Auth = (req, res, next) => {
    const token = req.headers.authorization ? req.headers.authorization.slice(7): ''

    const privateKey = process.env.SECRET;

    
     jwt.verify(token, privateKey, (err, decoded) => {
        if (err) {
            return;
        } else {
            req.token = decoded
            return next();
        }
    })
    return;
}

export default Auth