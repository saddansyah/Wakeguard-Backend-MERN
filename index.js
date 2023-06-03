const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

// const connectDB = require('./server/database/connection');
// const taskRouter = require('./server/routes/taskRouter');
// const userRouter = require('./server/routes/userRouter');
// const notesRouter = require('./server/routes/notesRouter');
// const errorHandler = require('./server/middleware/errorHandler');

const app = express();

// setup port
dotenv.config({ path: "config.env" })
const PORT = process.env.PORT || 8000

//tag req
app.use(morgan('dev'));

//mongoDB connection
// connectDB();

// express third party middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use('/api/tasks', taskRouter);
// app.use('/api/user', userRouter);
// app.use('/api/notes', notesRouter);

// middleware error handler
// app.use(errorHandler);

app.get('/', (req, res) => {
  res.status(200).json({ message: "Hello Wakeguard" })
})

app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`) });