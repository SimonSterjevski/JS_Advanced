let buttonReq = document.querySelector("#btn_req");
let tableBody = document.querySelector(".tablebody");
let tableHead = document.querySelector(".tablehead");
let box3 = document.querySelector(".box3");
let urlStart = `https://swapi.co/api/planets/?page=1`;
let nextUrl = null;
let previousUrl = null;

buttonReq.addEventListener("click", fetchFirst);


function fetchFirst() {
    fetchPlanets(urlStart);
}

function fetchNext10() {
    fetchPlanets(nextUrl);
}

function fetchPrevious10() {
    fetchPlanets(previousUrl);
}

function fetchPlanets(url) {
    fetch(url).
    then((response) => response.json()).
    then((response) => {
        previousUrl = response.previous;
        nextUrl = response.next;
        createTable(response);
    })
}


function createTable(planets) {
        tableBody.innerHTML = ``;
        tableHead.innerHTML = ``;
        box3.innerHTML = ``;
        tableHead.innerHTML = `<tr> 
        <th> Planet name </th>
        <th> Planet population </th> 
        <th> Planet climate </th> 
        <th> Planet gravity </th>
        </tr>`;
    for (let obj of planets.results) {
        tableBody.innerHTML += `<tr> 
         <td> ${obj.name} </td>
         <td> ${obj.population} </td> 
         <td> ${obj.climate} </td> 
         <td> ${obj.gravity} </td>
         </tr>`
        } 
         if ((planets.next) && (planets.previous)) {
        box3.innerHTML = `<button class="btn_previous"> Previous 10 </button>
        <button class="btn_next"> Next 10 </button>`;
        document.querySelector(".btn_next").addEventListener("click", fetchNext10);
        document.querySelector(".btn_previous").addEventListener("click", fetchPrevious10);
         } else if ((planets.next) && !(planets.previous)) {
        box3.innerHTML = `<button class="btn_next"> Next 10 </button>`;
        document.querySelector(".btn_next").addEventListener("click", fetchNext10); 
         } else {
        box3.innerHTML = `<button class="btn_previous"> Previous 10 </button>`;
        document.querySelector(".btn_previous").addEventListener("click", fetchPrevious10); 
         }
    }