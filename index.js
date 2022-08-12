const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const authRouter = require('./Routes/auth');
const userRouter = require('./Routes/user');

dotenv.config();
const app = express();


// Database connected
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB is connected"))
    .catch((err) => console.log(err));


app.use(express.json())

// Routing
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);

app.listen(5000, () => {
    console.log('Backend is running');
})