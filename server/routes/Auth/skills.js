import express from 'express'
import fetch from 'node-fetch';
import Auth from '../../controllers/isAuth.js';

const router = express.Router();

router.get('/', Auth, async (req, res) => {
    try {
        const response = await fetch(`http://localhost:8080/skills`);
        const data = await response.json();
        res.json(!data.length ? { msg: "0 records available" } : data)
    } catch (err) {
        res.status(400).send({ msg: 'Invalid token' })
    }
})

router.post('/', Auth, async (req, res) => {
        const { title, description } = req.body
        const skill = {
            title: title,
            description: description
        }

        try {
            if (title && description) {
                const response = await fetch('http://localhost:8080/skills', {
                    method: 'POST',
                    body: JSON.stringify(skill),
                    headers: { 'Content-Type': 'application/json' }
                });
                const data = await response.json();
                return res.json({ msg: 'Skill Added!' })
            } else {
                return res.status(400).send({ msg: 'Data should contain title and description keys' })
            }
        } catch (err) {
            return res.status(400).send({ msg: err })
        }

})

export default router;