

document.querySelector("#btn").addEventListener("click", showStudents);


async function showStudents() {
    let data = await fetchStudents("https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class4/students.json");
    let higherThan3 = data.filter(num => num.averageGrade > 3).map(num => `${num.firstName} ${num.lastName}`);
    console.log(higherThan3);
    let womenWith5 = data.filter(num => num.gender === "Female").filter(num => num.averageGrade === 5).
    map(num => `${num.firstName} ${num.lastName}`);
    console.log(womenWith5);
    let menFromSkOver18 = data.filter(num => num.gender === "Male").filter(num => num.city === "Skopje").
    filter(num => num.age > 18).map(num => `${num.firstName} ${num.lastName}`);
    console.log(menFromSkOver18);
    let womenOver24Grades = data.filter(num => num.gender === "Female").
    filter(num => num.age > 24).map(num => `${num.firstName} ${num.lastName}: ${num.averageGrade}`);
    console.log(womenOver24Grades);
    let menBOver2 = data.filter(num => num.gender === "Male").filter(num => num.averageGrade > 2).
    filter(num => num.firstName[0] === "B").map(num => `${num.firstName} ${num.lastName}`);
    console.log(menBOver2);
}


async function fetchStudents(url) {
    let students = [];
    let data = await fetch(url);
    let realData = await data.json();
    for (let subj of realData) {
        students.push(subj);
    }
    return students;
}





// function fetchStudents() {
//     let students = [];
//     fetch("https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class4/students.json").
//     then((response) => response.json()).
//     then((student) => {
//         for (let subj of student) {
//             students.push(subj);
//         }
//      let higherThan3 = students.filter(num => num.averageGrade > 3).map(num => `${num.firstName} ${num.lastName}`);
//      console.log(higherThan3);
//     })
// }

// fetchStudents();
  


// function fetchStudents1() {
//     let students = [];
//     fetch("https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class4/students.json").
//     then((response) => response.json()).
//     then((student) => {
//         for (let subj of student) {
//             students.push(subj);
//         }
//      let womenWith5 = students.filter(num => num.gender === "Female").filter(num => num.averageGrade === 5).
//      map(num => `${num.firstName} ${num.lastName}`);
//      console.log(womenWith5);
//     })
// }

// fetchStudents1();



// function fetchStudents2() {
//     let students = [];
//     fetch("https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class4/students.json").
//     then((response) => response.json()).
//     then((student) => {
//         for (let subj of student) {
//             students.push(subj);
//         }
//      let menFromSkOver18 = students.filter(num => num.gender === "Male").filter(num => num.city === "Skopje").
//      filter(num => num.age > 18).map(num => `${num.firstName} ${num.lastName}`);
//      console.log(menFromSkOver18);
//     })
// }

// fetchStudents2();



// function fetchStudents3() {
//     let students = [];
//     fetch("https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class4/students.json").
//     then((response) => response.json()).
//     then((student) => {
//         for (let subj of student) {
//             students.push(subj);
//         }
//      let womenOver24Grades = students.filter(num => num.gender === "Female").
//      filter(num => num.age > 24).map(num => `${num.firstName} ${num.lastName}: ${num.averageGrade}`);
//      console.log(womenOver24Grades);
//     })
// }

// fetchStudents3();



// function fetchStudents4() {
//     let students = [];
//     fetch("https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class4/students.json").
//     then((response) => response.json()).
//     then((student) => {
//         for (let subj of student) {
//             students.push(subj);
//         }
//      let menBOver2 = students.filter(num => num.gender === "Male").filter(num => num.averageGrade > 2).
//      filter(num => num.firstName[0] === "B").map(num => `${num.firstName} ${num.lastName}`);
//      console.log(menBOver2);
//     })
// }

// fetchStudents4();

