let express = require("express");
let morgan = require("morgan");
let bodyParser = require("body-parser");

let StudentRepo = require("./s2ms/studentRepo");
let Course = require("./s2ms/course");
let Student = require("./s2ms/student.js");

let app = express();
let hostname = 'localhost';
let port = 4000;

app.use(morgan('div'));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
//get all students
app.get("/api/students",(req,res,next)=>{
    let students = StudentRepo.students;
    res.json(students);
});

app.get('/api/students/gpa', (req, res, next) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let gpa = StudentRepo.getAvgGPA();
    res.write(gpa.toString());
    next();
});
//get student form ID
app.get('/api/students/:id',(req,res,next)=>{
    let ID = req.params.id;
    // res.write("hello, this is to get a student from the ID");
    let student = StudentRepo.getStudent(ID);
    res.json(student);
});
//post to add
app.post('/api/students',(req,res,next)=>{
    let newStudent = req.body;
    StudentRepo.addStudent(newStudent);
});
//put to update;

app.put('/api/students',(req,res,next)=>{
    let newStudent = req.body;
    StudentRepo.updateStudent(newStudent);
});

app.delete('/api/students/:id',(req,res,next)=>{
    let ID = req.params.id;
    StudentRepo.deleteStudent((ID));
});

app.listen(port, hostname, () => {
        console.log(`server started @ ${hostname}: ${port}`);
    }
);



