import express, { NextFunction, Request, Response } from 'express';
import usersRouter from './routes/users';

const app = express();

const PORT = 3000;

app.use('/api/users', usersRouter);

app.get('/',(req,res) => {
    
})

app.listen(PORT,() => {
    console.log(`Running on Port ${PORT}`)
})  