import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import userRoutes from './routes/user.js';
import gigRoutes from './routes/gigs.js';
import artistRoutes from './routes/artist.js';

const app = express();

app.use('/users', userRoutes);
app.use('/gigs', gigRoutes);
app.use('/artists', artistRoutes);

app.use(bodyParser.json({limit:'100mb', extended: true}));
app.use(bodyParser.urlencoded({limit:'100mb', extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://inco48:Lucifer12321@cluster0.uxk13co.mongodb.net/nonono?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5555;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=> app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`))).catch((error) => console.log(error.message));

mongoose.set('strictQuery', false)