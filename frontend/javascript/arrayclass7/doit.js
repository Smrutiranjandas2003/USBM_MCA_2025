// //Array

// let newArray = [];
// console.log(typeof newArray);

// const detail() => {
// let name = "Sursuri";
// let age = 60;
// let profession = "comedian";
// let isMarried = true;
// } 
// detail();
// let details = ["Smruti" , 22 , "Cuttack" , true];
// console.log(details);

// let newNumber = new Array(1,2,3,4,5,6);
// console.log(newNumber);

// //Array Methods

// // length
// console.log(number.length);

//Accessing

 let cities = ["Balasore", "Cuttack","Jajpur","Bhadrak"];
// console.log(cities[0]);
// console.log(cities[1]);
// console.log(cities[2]);

// // let element
 let lastCity = cities.length - 1 ;
// console.log(lastCity);
// console.log(cities[lastCity]);
// console.log(cities[lastCity - 2]);

//Modify
console.log(cities);
let mC = "Kendrapada";
cities[3] = mC;
console.log(cities);

//Addcity
let aC = "Baripada";
cities.push(aC);
console.log(cities);

// Delete

let dC = "jajpur";
cities.pop(dC);
console.log(cities);