/* Verifies JWT token  */

import jwt from 'jsonwebtoken'

let Auth = (req, res) => {
    let x = false;

    const token = req.headers.authorization.slice(7)

    const privateKey = process.env.SECRET;

    
     jwt.verify(token, privateKey, (err, decoded) => {
        if (err) {
            x = false
        } else {
            req.token = decoded
            x = true;
        }
    })
    return x;
}

export default Auth