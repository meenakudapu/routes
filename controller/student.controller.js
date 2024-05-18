const studentModel = require('../model/student.model');
async function getStudents(req,res){
    try {
        const students = await studentModel.find(); 
        res.status(200).json(students);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server failed to fetch students");
    }

}
async function getStudentById(req,res){
    try{
        const{id}=req.params;
        const student=await studentModel.findById(id);
       
        if(!student)res.status(500).send(`Server failed to fetch student with id:${id}`);
        else{
            res.status(200).json(student);
        }
    } catch (err) {
        console.error(err);
    
    }
}

async function deleteStudent(req,res){
    try{
        const { id } =req.params;
        const student=await studentModel.findByIdAndDelete(id);
        if(!student)res.status(500).send(`Server failed to delete student with id:${id}`);
        else{
            res.status(200).json(student);
        }}
        catch (err) {
            console.error(err);
        
    }
}
async function postStudent(req,res){
    try {
        const { id, name, Phone } = req.body;
      
        const student = await studentModel.create({
            _id: id,
            name: name,
            Phone: Phone
        });
        res.status(201).json(student); 
    } catch (err) {
        console.error(err); 
        res.status(500).send('Error occurred while creating the student'); 
    }
}
async function updateStudent(req,res){
    try{
        const{ id }=req.params;
        const student=await studentModel.findByIdAndUpdate(id,req.body);
        if(!student)res.status(500).send(`Server failed to update student with id:${id}`);
        else{
            const updatedStudent=await studentModel.findById(id);
            res.status(200).json(updatedStudent);
        }}
        catch (err) {
            console.error(err);
        
        
    }
}
module.exports={
    getStudents,
    getStudentById,
    postStudent,
    deleteStudent,
    updateStudent
}