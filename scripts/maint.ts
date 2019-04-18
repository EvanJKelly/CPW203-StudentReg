/**
 * Represents a CPTC Student 
 */
class Student{
    firstName:string;
    lastName:string;
    dateOfBirth:Date;
}

//test code
let testStu:Student = new Student();
testStu.firstName = "Joe"; 
testStu.lastName = "Ortiz";
//March 1st 1980
testStu.dateOfBirth = new Date(1980, 3 ,1);

window.onload = function(){
    let regBtn = <HTMLElement>
        document.querySelector("main > button")
    regBtn.onclick = registerStudent;
}

function registerStudent(){
    let nextStudent:Student = getStudent();
    displayStudent(nextStudent);
}

function getStudent():Student{
    let s = new Student();
    s.firstName = (<HTMLInputElement>
        document.getElementById("first-name")).value;

        s.lastName = (<HTMLInputElement>
            document.getElementById("last-name")).value;
        //TODO: get date of birth
    return s;
}

function displayStudent(stu:Student){
alert(stu.firstName + " " + stu.lastName);
}