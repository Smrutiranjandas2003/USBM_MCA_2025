// let fruits =["apple", "orange", "strawberry", ];
// let fruits2 =["banana","mango"];

// let fruit = fruits.concat(fruits2);
// console.log(fruit);

//defination of include()

// let sanga = ["suchi", "mana", "ashish", "diki", "mantu"];
// let nuaSanga = sanga.includes("benni");
// let nuaSanga2 = sanga.includes("suchi");
// console.log(nuaSanga);
// console.log(nuaSanga2);

// slice()
// let phala =["mango", "banana", "watermelon","apple", "lemon", ];
// let nuaphala = phala.slice(1,4);
// console.log(nuaphala);

//splice()
// const Months = ["Jan", "feb", "mar", "apr", "may", "jun", "jul"];
// Months.splice(2,0,"feb");
// console.log(Months);

// const gram = ["A","E","I","O","U"];
// gram.splice(2,2,"Y","z");
// console.log(gram);

const names =[1,2,3];
let mul = 2;
let newArray = names.map(value => value * mul);
console.log(newArray);

names.forEach(element => {
    console.log(element*2);
});

