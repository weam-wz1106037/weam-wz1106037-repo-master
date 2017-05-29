let express = require ('express')
let CourseController =require('./controllers/courseController');
let StudentController =require('./controllers/StudentController');
let router = express.Router()


router.get('/programs',(req,res )=> CourseController.getPrograms(req,res))
router.get('/courses',(req,res )=> CourseController.courses(req,res))
router.get('/',(req,res )=> {res.render('index')})
router.get('/api/courses/:code',(req,res )=> CourseController.getCourses(req,res))
    router.get('/api/courses/:code',(req,res )=> CourseController.courses(req,res))





router.get('/students',(req,res )=> StudentController.index(req,res))
router.route('/api/students')
    .get((req, res )=> StudentController.getStudents(req,res))
    .post((req, res )=> StudentController.addStudent(req,res))


router.route('/api/students/:id')
    .get((req, res )=> StudentController.getStudent(req,res))
    .put((req, res )=> StudentController.updateStudent(req,res))
    .delete((req,res) => StudentController.deleteStudent(req,res))

module.exports= router;