//for more operators visit developer.mozilla.org

var num1 = 5;
var num2 = 4;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

var answer = num1 > num2;
console.log(answer);

// Discount formula
// Discount = (ListPrice - SellingPrice)/ListPrice * 100
var sellingPrice = 199;
var listPrice = 799;

var discountPercentage = ((listPrice - sellingPrice) / listPrice) * 100;
console.log(discountPercentage); //it will not round up the result

displayDiscountPercentage = Math.round(discountPercentage); // it is for rounding up the value
console.log(displayDiscountPercentage);