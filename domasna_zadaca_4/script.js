//----------------TASK 1-----------------

function Person(name, surname, age) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.getFullName = function() {
        console.log(this.firstName, this.lastName)
    }
}

function Student(academy, id, name, surname, age) {
    Object.setPrototypeOf(this, new Person(name, surname, age))
    this.id = id;
    this.academyName = academy;
    this.study = function() {
        console.log(`The student ${this.firstName} is styding in the academy ${this.academyName}`);
}
}

let student1 = new Student("Web design", 24, "Steve", "Stevens", 28);
let student2 = new Student("Web development", 101, "Charles", "Charlisson", 32);
console.log(student1);
console.log(student2);
student1.getFullName();
student2.study();


//---------------TASK 2-------------------

// Student.prototype.seeAcademy = function() {
//     console.log(this.firstName);
// }
// student1.seeAcademy(); ///// ??????


function DesignStudent(academy = "Web design", id, name, surname, age) {
    Object.setPrototypeOf(this, new Student(academy, id, name, surname, age))
    this.isStudentOfTheMonth = false;
    this.attendAdobeExam = function() {
        console.log(`The student ${this.firstName} is doing an Adobe exam`)
    }
}
let student3 = new DesignStudent("Web design", 1, "Daniel", "Daniels", 30);
console.log(student3);
student3.attendAdobeExam();
student3.study();


function CodeStudent(academy = "Web development", id, name, surname, age, individualorgroup) {
    Object.setPrototypeOf(this, new Student(academy, id, name, surname, age))
    this.hasIndividualProject = false;
    this.hasGroupProject = false;
    this.doProject = function() {
        if (individualorgroup === "individual" || individualorgroup === "group") {
        individualorgroup === "individual"? console.log(`The student is working on ${individualorgroup} project`): console.log(`The student is working on ${individualorgroup} project`);
        individualorgroup === "individual"? this.hasIndividualProject = true: this.hasGroupProject = true;
        } else {
            console.log(`Please enter individual or group`);
        }
    }
}
let student4 = new CodeStudent("Web development", 10, "Davis", "Davis", 19, "individual");
console.log(student4);
student4.doProject();
student4.study();


function NetworkStudent(academy = "Network system", id, name, surname, age, part) {
    Object.setPrototypeOf(this, new Student(academy, id, name, surname, age))
    this.academyPart = part;
    this.attendCiscoExam = function() {
        console.log(`The student ${this.firstName} is doing a Cisco exam`)
    }
}
let student5 = new NetworkStudent("Network system", 19, "Mark", "Markusen", 40, 3);
console.log(student5);
student5.attendCiscoExam();
student5.study();