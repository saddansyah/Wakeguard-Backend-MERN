const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

const connectDB = require('./src/database/connection');

const contactsRoute = require('./src/routes/contactsRoute');
// const userRouter = require('./src/routes/userRouter');
// const notesRouter = require('./src/routes/notesRouter');

const errorHandler = require('./src/middlewares/errorHandler');

const app = express();

// setup port
dotenv.config({ path: "config.env" })
const PORT = process.env.PORT || 8000

//logger 
app.use(morgan('dev'));

//mongoDB connection
connectDB();

// express third party middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use route
app.use('/api/contacts', contactsRoute);
// app.use('/api/tasks', taskRouter);
// app.use('/api/user', userRouter);
// app.use('/api/notes', notesRouter);

// middleware error handler
app.use(errorHandler);

app.get('/', (req, res) => {
  res.status(200).json({ message: "Hello Wakeguard" })
})

app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`) });