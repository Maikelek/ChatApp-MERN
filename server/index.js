const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();
dotenv.config();

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.get("/", (req, res) => {
    res.send("Maichat Backend: Main Page");
})

/* Routes */
const userRouter = require('./routes/userRouter');
app.use('/user', userRouter);

const authRouter = require('./routes/authRouter');
app.use('/auth', authRouter);

mongoose.connect(process.env.MONGO_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB successfully");
  })

app.listen(1245, () =>{
    console.log("Backend server started successfully");
})