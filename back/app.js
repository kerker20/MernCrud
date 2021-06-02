// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const UserRouter = require('./routes/user');

// require('dotenv').config();

// const app = express();
// const port  = process.env.PORT || 5001;

// app.use(cors());
// app.use(express.json());
 
// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log('MongoDB connection established.');
// })

// app.use('/user', UserRouter);

// app.listen(port, () => {
//     console.log('Server is runnning at port: ' + port);
// });

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const food = require('./routes/api/food');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/food', food);

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server running on port ${port}`));