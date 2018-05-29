"use strict";

window.addEventListener("DOMContentLoaded", buildList);

let students = ["Adam Cichy",
"Kamille Mai Rye",
"Øjvind Hougaard Rasmussen",
"Alexander Ellegaard Landberg",
"Katrine Marie Kofoed Nielsen",
"Alexander Hedengran Burchardt",
"Krzysztof Mazur",
"Alona Virodova",
"Lasse Kjær Hauerberg",
"Amalia Stefanescu",
"Linnea Amina Dahbi Højfeldt",
"Amalia Blanca Plana Ruiz",
"Louise Hauge Jessen",
"Anders Verdier",
"Maria Macedo Ferreira",
"Andrei Bolog",
"Marija Belautdinova",
"Anne Linde Andersen",
"Mishari Adel Toama",
"Benjamin Pelzman",
"Modestas Sekstela",
"Birkir Björnsson",
"Nanna Lisberg",
"Botond Lorand Birton",
"Nicklas Toft Povlsen",
"Bruno Miguel Caetano Amado",
"Nicolas Møller Holm",
"Calin Valentin Dima",
"Niels Erik Raursø",
"Camille Doussy",
"Niels Krahmer Gerdes",
"Cecilie Harbo Holm",
"Oliver Pyndt Sømme",
"Charléne Marteyn",
"Pablo Vicente de la Sota",
"Chiara Nicola",
"Patrycja Julia Zawrotniak",
"Christina Hedegaard Nielsen",
"Pernille Lee Nørskov",
"Constantin Guiu",
"Rasmus Kvist",
"Dávid Ale",
"Rita Radovics",
"Dina El Idrissi",
"Robert Alexandru Tutu",
"Dovile Søndergaard",
"Rosa de Lurdes Afreixo Pires",
"Edita Gudan",
"Sofie Linde Kirketerp",
"Frederik Lee Kofoed",
"Stine Holm Andersson",
"Greta Gerulyte",
"Søren Hermansen",
"Ioana Vládáu-Babii",
"Tadeas Kosek",
"Irina Salagup",
"Valentina Ivanova Shtarbova",
"Istvan-Tamas Török",
"Veronika Machácková",
"Izabela Anna Turaj",
"Vítek Linhart",
"Julie Titte Helt Lund",
"Cecilie Glavind Rasmussen",
"Wioletta Gluza"]


// fetch('names.json')
// .then(function(response) {
// return response.json();
// })
// .then(function(myJson) {
// console.log(myJson);
// });


// 3. In JavaScript, create a function addStudent()  
//that clones the template, and appends the clone to the #students list
function addStudent(listElement){
console.log (listElement)

    let studentsTemplate = document.querySelector(".students_template").content;
    let clone = studentsTemplate.cloneNode(true);

    getNameParts(listElement);
 
clone.querySelector('[data-json="firstname"]').textContent = `${listElement}`;
document.querySelector("#students").appendChild(clone);
};


//4.  Test that it works, by calling it multiple times from the console - 
//it should add a default <li> to the list everytime.
 //addStudent();

//5. Create another function, buildList() that iterates through all 
//the students from the array, and calls addStudent on each item.
//This should result in a long list of identical <li>s


function buildList(){
    students.forEach(addStudent)    
};
//6. Make sure that a parameter is passed to addStudent, 
//and console.log it - it should be the name of the student!
// in console buildList(); and we can see the name because in the first
//function I console.log the element

//7. Modify the addStudent function, so it finds the span where 
//data-json is firstname, and sets its’ textContent 
//to the full name of the student. 
//You’ll need to look into attribute-selectors.
//The full name is temporary, just to see that something works
//clone.querySelector('[data-json="firstname"]').textContent=`${stud}`;
//We put this code in the addStudent function before clone


//8. Create a function, getNameParts(fullname) that receives
//the full name, and splits it into three parts, first, 
//middle and last.

function getNameParts(fullName){

const firstSpace = fullName.indexOf(" ");
const firstName = fullName.substr(0, firstSpace);
const secondSpace = fullName.lastIndexOf(" ");
const middleName = fullName.substring(firstSpace+1, secondSpace);
const lastName = fullName.substr(secondSpace+1);


console.log(`first: ${firstName}`);
console.log(`middle: ${middleName}`);
console.log(`last: ${lastName}`);
console.log("--------");

const result = {
    firstName,
    middleName,
    lastName

};
return result;
};



// 
