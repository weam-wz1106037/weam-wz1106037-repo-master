let CourseRepository = require('./../models/courseRepository');
class CourseController {
    constructor() {
    }

    async getPrograms(req, res) {
        try {

            let programs= await CourseRepository.getPrograms()
            res.json(programs)
        }
        catch (error) {
           res.send(500).send(error)
        }
    }

    async getCourses(req, res) {
        try {
            let code = req.params.code
            let courses = await CourseRepository.getCourses(code.toString())
            res.json(courses)
        }
        catch (error) {
            res.send(500).send(error)
        }
    }
    async courses(req, res) {
        try {

            let programs= await CourseRepository.getPrograms()
            res.render('courses',{programs});
        }
        catch (error) {
            res.send(500).send(error)
        }
    }
}
module.exports = new CourseController();