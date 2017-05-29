
let student = {
    stId:"",
    stfName:"",
    stlName:"",
    stProg:"",
    gpa:"",
    courses:[],

    updatCourse:function(course){
        this.courses.push(course);
    },
    addCourse:function(course){
        this.courses.push(course);
    },
    deleteCourse:function(course){
        this.courses.splice(course);
    },

    getGpa:function(student1){
        let totcourse = student1.courses.length;
        let gpa = 0.0;
        for(let i=0; i<totcourse; i++){
            let thisgpa = 0;
            if(this.courses[i].grade=="A"){
                thisgpa = 4;
            }else if(student1.courses[i].grade=="B+"){
                thisgpa = 3.5;
            }else if(student1.courses[i].grade=="B"){
                thisgpa = 3;
            }else if(student1.courses[i].grade=="C+"){
                thisgpa = 2.5;
            }else if(student1.courses[i].grade=="C"){
                thisgpa = 2;
            }else if(student1.courses[i].grade=="D+"){
                thisgpa = 1.5;
            }else if(student1.courses[i].grade=="D"){
                thisgpa = 1;
            }else if(student1.courses[i].grade=="F"){
                thisgpa = 0;
            }
            gpa = gpa + thisgpa;
        }
        return gpa/totcourse;
    }
}

