
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const studentRoutes = require('./routes/student.route');

require('dotenv').config();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/meejp')
    .then(() => console.log("Successful connection"))
    .catch(err => console.error("Connection error:", err));

app.use('/api/students', studentRoutes);

// app.get('/', (req, res) => {
//     res.status(200).send('Accessed');
// });

// app.use((req, res, next) => {
//     res.status(404).send('Not Found');
// });

app.listen(port, () => {
    console.log(`Server started running on port ${port}`);
});
