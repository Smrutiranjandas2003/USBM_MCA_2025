//let a = 89;
//let b = 43;
//let result = a + b;
//let even = a%2;
//console.log(!5 == "5");

let  total_bill = 1000;
if (total_bill > 750) {
    console.log("discount");
}
    else{
        console.log("no discount");
    }

let age = 21;

if (age >= 18) {
    console.log("adults");
}
else if (age >=60){
    console.log("seniors");
}
else {
    console.log("children");
}


let age1 = 23;
let gender = "male";

if (age1 >= 23 && gender === "male") {
    console.log("u can marry");
}

let a = "d";
if (a ==="a" || a === "e" || a === "i" || a === "o"|| a === "u"  )
{
    console.log("vowel");
}
else{
    console.log("not a vowel");
}


//switch case vowel

let char = "u";

switch (char) {
 case "a" :
    console.log("vowel");
    break;
    case "e" :
        console.log("vowel");
        break;
    case "i" :
        console.log("vowel");
        break;
    case "o" :
        console.log("vowel");
        break;
    case "u" :
        console.log("vowel");
        break;
    default:    
    console.log("not a vowel");
}   



//month
let num = 12;
switch(num){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month");
        break;
}