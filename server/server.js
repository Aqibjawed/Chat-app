import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/authRoutes.js'
import messageRoutes from './routes/messageRoutes.js'
import userRoutes from './routes/userRoutes.js'

import connectToDB from './db/db.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config()
app.use(express.json()); // To parse the incoming requests with json payload from (req.body)
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/users', userRoutes);

// app.get('/', (req, res)=> {
//     // root route  http://localhost:5000/
//     res.send('Hello Aqib')
// });


app.listen(PORT, ()=>{
    connectToDB();
    console.log(`server running on port ${PORT}`);
})
