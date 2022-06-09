require('dotenv').config();
const express = require('express');
const Login = require('./routes/user');
const userRouter = require('./routes/user');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.use('/api/user', userRouter);

const start = async () => {
  try {
    //connect DB
    //listen server
    await app.listen(port, console.log(`server started at ${port}...`));
  } catch (error) {
    console.error(error);
  }
};

start();
