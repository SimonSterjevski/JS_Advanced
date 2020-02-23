

function Academy(name, start, end, students, subjects) {
    this.academyName = name;
    this.students = students;
    this.subjects = subjects;
    this.startDate = start;
    this.endDate = end;
    this.numberOfClasses = this.subjects.length*10;
    this.printStudents = function() {
        this.students.forEach(function(student) {
            console.log(student);
        })
    };
    this.printSubjects = function() {
        this.subjects.forEach(function(subject) {
            console.log(subject.title)
        })
    };
}

function Student(name, surname, age) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.completedSubject = [];
    this.academy = null;
    this.currentSubject = null;
    this.startAcademy = function(acad, stud) {
        this.academy = acad;
        if (!this.academy.students.includes(`${stud.firstName} ${stud.lastName}`))
        this.academy.students.push(`${stud.firstName} ${stud.lastName}`);
    };
    this.startSubject = function(subj){
        if(this.currentSubject) {
        this.completedSubject.push(this.currentSubject);
        }
        if(this.academy && this.academy.subjects.includes(subj.title)){
        this.currentSubject = subj.title;
        subj.students.push(`${this.firstName} ${this.lastName}`)
        subj.academy = this.academy;
        } else {
            console.log(`The subject ${subj.title} is not on the list`);
        }
    }
}

function Subject(title, acad) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = false;
    this.academy = acad;
    this.students = [];
    this.overrideClasses = function(classesnum) {
       if (classesnum > 3){
           this.numberOfClasses = classesnum;
           console.log()
           this.academy.numberOfClasses -= (10 - this.numberOfClasses);
       }
    }
}

let student1 = new Student("Simon", "Sterjevski", 33);
let student2 = new Student("Petar", "Petrov", 48);
let student3 = new Student("Robert", "Robertson", 27);
let student4 = new Student("Bruce", "Brown", 32);
let webDesign = new Subject("Web design", new Academy("Seavus", "October 2019", "October 2020", [`${student1.firstName} ${student1.lastName}`, `${student2.firstName} ${student2.lastName}`], 
["Web design", "Web development", "Network system"]));
let webDevelopment = new Subject("Web development", new Academy("Seavus", "October 2019", "October 2020", [`${student1.firstName} ${student1.lastName}`, `${student2.firstName} ${student2.lastName}`], 
["Web design", "Web development", "Network system"]));
let networks = new Subject("Network system", new Academy("Seavus", "October 2019", "October 2020", [`${student1.firstName} ${student1.lastName}`, `${student2.firstName} ${student2.lastName}`], 
["Web design", "Web development", "Network system"]));
let sedc = new Academy("Seavus", "October 2019", "October 2020", [`${student1.firstName} ${student1.lastName}`, `${student2.firstName} ${student2.lastName}`], 
[webDesign.title, webDevelopment.title, networks.title]);

student3.startAcademy(sedc, student3);
student3.startSubject(webDesign);
student2.startAcademy(sedc, student2);
student2.startSubject(webDesign);
student3.startSubject(webDevelopment);
student3.startSubject(networks);
student4.startAcademy(sedc, student4);
webDesign.overrideClasses(6);
webDevelopment.overrideClasses(9);
console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);
console.log(sedc);
console.log(webDesign);
console.log(webDevelopment);
console.log(networks);
sedc.printStudents();







