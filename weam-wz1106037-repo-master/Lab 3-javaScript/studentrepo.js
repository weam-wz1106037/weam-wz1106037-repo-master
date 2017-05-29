
let studentrepo = {
    students:[],
    addStudent:function(student){
        this.students.push(student);
    },
    updateStudent:function(student){
        this.students.push(student);
    },
    deleteStudent:function(stId){

        let totst = this.students.length;

        for(var i=0; i<totst; i++){
            if(stId==this.students[i].stId){
                this.students.splice(this.students[i]);
            }
        }

        return 1;
    },
    getStudent:function(stId){
        let student = this.students.find(x => x.studentId == stId);
        return student;
    },
    getAvgGpa:function(){
        let allGpa = this.students.reduce((sum,x) => sum+=x.getGpa());
        let avg=allGpa/this.students.length;
        return avg;

    },
    getTop2st:function(){
        let nary = [];
        let totst = this.students.length;
        for(let i=0; i<totst; i++){
            nary[i] = this.students[i].gpa;
        }
        nary = nary.sort(sortNumber);

        let fst = totst - 1;
        let sst = totst - 2;

        let studs = [];

        for(let i=0; i<totst; i++){
            if(nary[fst]==this.students[i].gpa){
                studs[0] = this.students[i];
            }
        }

        for(let i=0; i<totst; i++){
            if(nary[sst]==this.students[i].gpa){
                studs[1] = this.students[i];
            }
        }
        return studs;
    }
}

module.exports = new StudentRepo();