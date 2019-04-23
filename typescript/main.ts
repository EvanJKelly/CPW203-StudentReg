/**
 * Represents a CPTC Student 
 */
class Student{
    firstName:string;
    lastName:string;
    dateOfBirth:Date;
}

//test code
//Create a new instance, creating an object,
//instantiating an object
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

/**
 * Gets user input from the form and 
 * warps it in a student object
 */
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

    //<li> </li>
    let studentLI:HTMLLIElement = 
        document.createElement("li");
    //<li>J. Doe</li>
    studentLI.innerText = stu.firstName + " " + stu.lastName;

    //getting <ul> and appending the new <li>
    let list = 
        document.querySelector("#roster > ul ");
        list.appendChild(studentLI);

}