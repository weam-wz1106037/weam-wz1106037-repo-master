
let url1 = 'https://cmps356s17.github.io/data/ceng-programs.json'
let url2 = 'https://cmps356s17.github.io/data/ceng-courses.json'
let fetch = require('node-fetch');

class CourseRepository {
    constructor() {

    }

    async getPrograms() {
        try {
            let data = await fetch(url1)
           program = data.json()
            return data
        }
        catch (error) {
            console.log(error)
        }


    }

    async getCourses(code) {
        try {
let data= await fetch(url2)
            data =await data.json()
            data = data.filter(x => x.program == code.toUpperCase())
            return data
        }
        catch (error) {
            console.log(error)
        }
    }
}
module.exports=new CourseRepository()

/*
let c=  new CourseRepository()
c.getCourses('CHE').then(d => console.log(d))
*/