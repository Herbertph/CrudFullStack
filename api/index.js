import express from 'express';
import usersRouter from './routes/users.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', usersRouter);

app.listen(8800, () => {
    console.log('Server is running on port http://localhost:8800/');
});