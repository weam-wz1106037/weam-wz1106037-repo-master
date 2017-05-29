let  c1 = new course();
let st1 = new student();
c1.courseCode = "CMP151";
c1.courseName = "Programming Concepts";
c1.crHr = 3;
c1.semester = "Spring 2016";
c1.grade = "A";
st1.addCourse(c1);
let st2 = new student();
let  c2 = new course();
c2.courseCode = "CMP152";
c2.courseName = "Programming Concepts Lab";
c2.crHr = 1;
c2.semester = "Spring 2016";
c2.grade = "B";
st1.addCourse(c2);

let c3 = new course();
c3.courseCode = "CMP251";
c3.courseName = "OO Programming";
c3.crHr = 3;
c3.semester = "Fall 2016";
c3.grade = "B+";
st1.addCourse(c3);

let c4 = new course();
c4.courseCode = "CMP252";
c4.courseName = "OO Programming Lab";
c4.crHr = 1;
c4.semester = "Fall 2016";
c4.grade = "A";
st2.addCourse(c4);


st1.stId = 123;
st1.stfName = "Abbas";
st1.stlName = "Ibn Firnas";
st1.stProg = "CS";
st1.gpa = student.getGpa(student);
studentrepo.addStudent(st1);

let c5 = new course();
c5.courseCode = "CMP251";
c5.courseName = "OO Programming";
c5.crHr = 3;
c5.semester = "Spring 2016";
c5.grade = "D+";
st2.addCourse(c5);

let c6 = new course();
c6.courseCode = "CMP252";
c6.courseName = "OO Programming Lab";
c6.crHr = 1;
c6.semester = "Spring 2016";
c6.grade = "D+";
st2.addCourse(c6);


let c7 = new course();
c7.courseCode = "CMP351";
c7.courseName = "Web Programming";
c7.crHr = 3;
c7.semester = "Fall 2016";
c7.grade = "C";
student.addCourse(c7);

let c8 = new course();
c8.courseCode = "CMP152";
c8.courseName = "Web Programming Lab";
c8.crHr = 1;
c8.semester = "Fall 2016";
c8.grade = "F";
student.addCourse(c8);


st2.stId =234;
st2.stfName = "Joha";
st2.stlName = "Dahak";
st2.stProg = "CS";
st2.gpa = student.getGpa(student);
studentrepo.addStudent(st1);

let c1 = new Object();
c1.courseCode = "CMP151";
c1.courseName = "Programming Concepts";
c1.crHr = 3;
c1.semester = "Spring 2016";
c1.grade = "C";
student.addCourse(c1);

let c1 = new Object();
c1.courseCode = "CMP152";
c1.courseName = "Programming Concepts Lab";
c1.crHr = 1;
c1.semester = "Spring 2016";
c1.grade = "A";
student.addCourse(c1);

let c1 = new Object();
c1.courseCode = "CMP251";
c1.courseName = "OO Programming";
c1.crHr = 3;
c1.semester = "Fall 2016";
c1.grade = "B+";
student.addCourse(c1);

let c1 = new Object();
c1.courseCode = "CMP252";
c1.courseName = "OO Programming Lab";
c1.crHr = 1;
c1.semester = "Fall 2016";
c1.grade = "C+";
student.addCourse(c1);

let st1 = new Object();
st1.stId = 345;
st1.stfName = "Fatima";
st1.stlName = "Al-Firhi";
st1.stProg = "CE";
st1.gpa = student.getGpa(student);
studentrepo.addStudent(st1);

let c1 = new Object();
c1.courseCode = "CMP251";
c1.courseName = "OO Programming ";
c1.crHr = 3;
c1.semester = "Spring 2016";
c1.grade = "A";
student.addCourse(c1);

let c1 = new Object();
c1.courseCode = "CMP252";
c1.courseName = "OO Programming Lab";
c1.crHr = 1;
c1.semester = "Spring 2016";
c1.grade = "B+";
student.addCourse(c1);

let c1 = new Object();
c1.courseCode = "CMP251";
c1.courseName = "History";
c1.crHr = 3;
c1.semester = "Fall 2016";
c1.grade = "B";
student.addCourse(c1);

let c1 = new Object();
c1.courseCode = "CMP252";
c1.courseName = "Robotics";
c1.crHr = 1;
c1.semester = "Fall 2016";
c1.grade = "E+";
student.addCourse(c1);

let st1 = new Object();
st1.stId = 456;
st1.stfName = "Zynab";
st1.stlName = "Al-Kinid";
st1.stProg = "CE";
st1.gpa = student.getGpa(student);
studentrepo.addStudent(st1);



let tp2 = studentrepo.getTop2st();
let getst = studentrepo.getStudent(456);
studentrepo.deleteStudent((456));



function sortNumber(a,b) {
    return a - b;
}