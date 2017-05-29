let StudentRepository = require('./../models/StudentRepository');
class StudentController {
    constructor() {
    }

    async getStudents(req, res) {
        try {

           let data= await StudentRepository.students
            res.json(data)

        }
        catch (error) {
            console.log(error)
        }
    }

    async getStudent(req, res) {
        try {
            let id = req.params.id
            let data = await StudentRepository.getStudent((parseInt(id)))
            res.json(data)
        }
        catch (error) {
            console.log(error)
        }
    }



async addStudent(req, res) {
    try {
        let student = req.body
        let data = await StudentRepository.addStudent(student)
        res.json(data)
    }
    catch (error) {
        console.log(error)
    }
}
    async deleteStudent(req, res) {
        try {
            let id = req.params.id
            let data = await StudentRepository.deleteStudent(parseInt(id))
            res.json(data)
        }
        catch (error) {
            console.log(error)
        }
    }

            async updateStudent(req, res) {
                try {
                    let student = req.body
                    let data = await StudentRepository.updateStudent(student)
                    res.json(data)
                }
                catch (error) {
                    console.log(error)
                }
            }



}










module.exports = new StudentController();