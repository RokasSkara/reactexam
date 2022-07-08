import express from 'express'

const router = express.Router();

router.post('/', async (req, res) => {
    const loginData = req.body
    res.json(loginData)
})

export default router;