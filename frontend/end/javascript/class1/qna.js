//## Question-1:
//Write a JavaScript program that calculates the total bill for a restaurant order. The program should do the following:
//- Define two variables `foodPrice` and `drinkPrice` and assign them any values of your choice.
//- Calculate the total bill by adding `foodPrice` and `drinkPrice`.
//- Add a 10% tip based on the total bill.
//- Display the final amount (total bill + tip) using `console.log`.//

let foodPrice = 100;
let drinkPrice = 20;
let totalAmount = foodPrice + drinkPrice;
let totalBill = totalAmount + totalAmount * 0.1;
console.log(`your food price is ${foodPrice}\nyour drink price is ${drinkPrice}\ntotal bill is ${totalBill }`);


//## Question-2:
//Write a JavaScript program that calculates the final price of a product after applying a discount. The program should:
//- Define a variable `originalPrice` to store the original price of the product.
// Define another variable `discount` to store the discount amount.
//- Calculate the final price by subtracting the `discount` from the original price.
//- Display the `discounted` price using `console.log`.

let originalPrice = 1000;
let discount = 150;
let discountedPrice = originalPrice - discount;
console.log(`discounted price is ${discountedPrice}`);


//## Question-3:
//Write a JavaScript program that calculates the total amount a customer needs to pay after adding sales tax to the product price. The program should:
//- Define a variable `productPrice` for the cost of the product.
///- Define a variable `salesTaxRate` to store the sales tax percentage (e.g., 8%).
//- Calculate the tax amount and the total price (product price + tax).
//- Display the total price after adding sales tax using `console.log`.

let productPrice = 600;
let taxRate = 45;
let taxAmount = productPrice * taxRate / 100 ;
let totalPrice = productPrice + taxAmount ; 
console.log(`The total Price is ${totalPrice}`);