import express from 'express';
import cors from 'cors';

//routes
import registration from './routes/Public/register.js'
import login from './routes/Public/login.js'
import skills from './routes/Auth/skills.js'

const PORT = 5000;
const app = express();

app.use(cors(), express.json(), express.urlencoded({extended: false}));

app.use('/register', registration);
app.use('/login', login);
app.use('/skills', skills);

app.all('*', (req,res) => {
    res.status(404).send({error: 'Page not found'})
});

app.listen(PORT, () => console.log(`Server live on port ${PORT}`));