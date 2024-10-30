// let arr = [100,200,300,400];
// for (var i = 0; i < arr.length;i++){
//     console.log(arr[i]*2);
// }

// arr.forEach((l) => {
//     console.log(l)
// });

// let doubledArray = arr.map(l => l*2);
// console.log(doubledArray); 

// let alpha = ["a", "b", "c", "d", "e", ];
//  const beta = alpha.map ((l)=>{
//     return(l.toUpperCase());
// })
// console.log(beta);

// let result = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//  const even =result.filter(l => l%2 == 0);
//  console.log(even);

//  const odd = result.filter((l) => {
//      return l%2!= 0;
//  });
//  console.log(odd);

let student ={
    names :"Benni",
    age :22,
    batch :"MCA",
    roll :21
};

console.log(student.age, student.names);

const std = new Object();
std.names ="benni";
std.batch ="MCA";
std.roll =21;
std.age=22;
console.log(std);