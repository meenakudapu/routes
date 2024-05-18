

// student.model.js
const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    _id: Number,
    name: String,
    Phone: Number
});

const studentModel = mongoose.model("student", studentSchema);

module.exports = studentModel;
