import express from 'express'
import bcrypt from 'bcrypt'
import CredentialValidation from '../../controllers/validation.js'
import fetch from 'node-fetch';

const router = express.Router();

router.post('/', async (req, res) => {

    const { email, password } = req.body
    const hashedPass = await bcrypt.hash(password, 5);

    if (CredentialValidation(req.body)) {
        try {
            //Checking if username with such email already exists
            let duplicate = false;
            await fetch('http://localhost:8080/users')
                .then(res => res.json())
                .then(users => {
                    duplicate = users.some(user => user.email === email)
                    console.log(duplicate)
                })
            //Proceeding only if email is not already in use
            if (!duplicate) {
                const response = await fetch('http://localhost:8080/users', {
                    method: 'POST',
                    body: JSON.stringify({
                        email: email,
                        password: hashedPass
                    }),
                    headers: { 'Content-Type': 'application/json' }
                });
                await response.json();
                return res.json({
                    changes: 1,
                    msg: 'Registration successfull',
                })
            } else {
                res.status(400).send('User already exists')
            }
        } catch (err) {
            res.status(500).send({ error: `Error:` + err })
        }
    } else {
        res.status(400).send('Incorrect information provided, check and try again')
    }
})

export default router;