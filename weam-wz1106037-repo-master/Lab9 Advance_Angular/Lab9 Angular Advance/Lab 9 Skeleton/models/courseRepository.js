let fetch = require("node-fetch");
class CourseRepository{
    constructor(){

    }

    async getPrograms(){
        let data = await fetch('https://cmps356s17.github.io/data/ceng-programs.json');
        let programs = await data.json();
        return programs;

    }
    async getCourses( programCode){
        let data = await fetch('https://cmps356s17.github.io/data/ceng-courses.json');
        let courses = await data.json();
        return courses.filter(c => c.program == programCode.toUpperCase());
    }
}

module.exports = new CourseRepository();
