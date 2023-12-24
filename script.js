// const persoana = {
//     name: "Tyrone",
//     age: 33,
//     city: 'Denver',
//     interese: ["Bicycling", "Camping", "Music", "Cooking"]
//   };

// console.log("Iterare prin chei (for...in)");
// for (let key in persoana) {
//     console.log(key)
// }

// console.log("Iterare prin valori (for...of)");
// for (let value of Object.values(persoana)) {
//     console.log(value);
// }

// console.log("Iterare prin array (for...of)")
// for (let interes of persoana.interese) {
//     console.log(interes);
// }

// const set = new Set([1, 2, 5, 8, 21, 37, 85, 38 ,34, 55, 63]);
// for (let element of set) {
//     console.log(element);
// }


// let user = { 
//     name: 'John', 
//     age: 30, 
//     city: 'New York'
// };

// const showDetails = ({ name, age, city }) => {
//     return `Numele meu este ${name}, am ${age} de ani și locuiesc în ${city}.`;
// };

// console.log(showDetails(user));

// const hobby = ['Sky', 'swimming', 'cooking', 'flying'];

// const adaugaHobby = (user, hobby) => {
//     const spread = { ...user, hobby };
//     console.log(spread);
// };

// adaugaHobby(user, hobby);

// student = {
//     nume: 'Alice',
//     varsta: 22,
//     note: [8, 9, 7],
// };
// const afiseazaDetaliiStudent = ({ nume, varsta, note }) => {
// const mediaNotelor = note.reduce((acc, value) => acc + value, 0)
// const avg = (mediaNotelor / note.length) || 0;
// return `${nume} in varsta de ${varsta} are notele ${note} iar media notelor este ${avg.toFixed(2)}`};

// console.log(afiseazaDetaliiStudent(student));



// num = [21, 14, 96, 15, 24, 33, 12, 43, 6, 4];
// filterNumber = num.filter(number => number % 2 === 0);
// console.log(filterNumber)



// book = {
//     title: 'Harry Potter',
//     author: 'J.K Rowwling',
//     year: 1995,
//     pages: 298,
// }
// const showDetails = () => {
//     for (const [key, value] of Object.entries(book)) {
//         console.log(showDetails(book))
//     }   
// } 


// numere = [1, 4, 6, 10, 23, 26, 28, 29, 51, 43, 98];

// const filtrareSiTransformare = () => {
//     const numereFiltrate = numere.filter((numar) => numar > 5);
//     const numereTransformate = numereFiltrate.map(x => x * 2);
//     return numereTransformate;
// }
// const rezultat = filtrareSiTransformare();
// console.log(rezultat)



// var individ = ["Ana", "Maria", "Ioan", "Andrei", "Elena", "Gabriel", "Laura", "Adrian", "Cristina", "Alex", "Raluca", "Mihai", "Diana", "Florin", "Simona", "Paul", "Iulia", "George", "Denisa", "Razvan"];

// const concatenareSiFiltrare = () => {
//     const numeModificate = individ.map(individ => 'Domnul ' + individ);
//     const numeFiltrare =  numeModificate.filter(individ => individ.length < 12);
//     return numeFiltrare;
// }
// const rezultat = concatenareSiFiltrare(individ);
// console.log(rezultat)


