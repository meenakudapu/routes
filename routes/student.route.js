// student.route.js
const express = require('express');
const routes = express();
const studentModel = require('../model/student.model');
const { getStudents } = require('../controller/student.controller');
const { getStudentById,updateStudent,deleteStudent,postStudent } = require('../controller/student.controller');

routes.use(express.json());
routes.use(express.urlencoded({ extended: true }));

routes.post('/',postStudent)
// routes.post('/', async (req, res) => {
//     try {
//         const { id, name, Phone } = req.body;
      
//         const student = await studentModel.create({
//             _id: id,
//             name: name,
//             Phone: Phone
//         });
//         res.status(201).json(student); 
//     } catch (err) {
//         console.error(err); 
//         res.status(500).send('Error occurred while creating the student'); 
//     }
// });
routes.get('/',getStudents)

// routes.get('/', async (req, res) => {
//     try {
//         const students = await studentModel.find(); // Fetch all students
//         res.status(200).json(students);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send("Server failed to fetch students");
//     }
// });
routes.get('/:id',getStudentById)
// routes.get('/:id',async(req,res)=>{
//     try{
//         const{id}=req.params;
//         const student=await studentModel.findById(id);
       
//         if(!student)res.status(500).send(`Server failed to fetch student with id:${id}`);
//         else{
//             res.status(200).json(student);
//         }
//     } catch (err) {
//         console.error(err);
    
//     }
// })
routes.delete('/:id',deleteStudent);
// routes.delete('/:id',async(req,res)=>{
//     try{
//         const { id } =req.params;
//         const student=await studentModel.findByIdAndDelete(id);
//         if(!student)res.status(500).send(`Server failed to delete student with id:${id}`);
//         else{
//             res.status(200).json(student);
//         }}
//         catch (err) {
//             console.error(err);
        
        
//     }
// })

routes.put('/:id',updateStudent)
// routes.put('/:id',async(req,res)=>{
//     try{
//         const{ id }=req.params;
//         const student=await studentModel.findByIdAndUpdate(id,req.body);
//         if(!student)res.status(500).send(`Server failed to update student with id:${id}`);
//         else{
//             const updatedStudent=await studentModel.findById(id);
//             res.status(200).json(updatedStudent);
//         }}
//         catch (err) {
//             console.error(err);
        
        
//     }
// })
module.exports = routes;
