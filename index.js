var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var evenNumber = [];
var oddNumber = [];

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
        evenNumber.push(numbers[i]);
    } else {
        oddNumber.push(numbers[i]);
    }
}

const origin = document.querySelector(".origin");
const even = document.querySelector(".even");
const odd = document.querySelector(".odd");

origin.textContent = "Original Numbers: " + numbers.toString();
even.textContent = "Even Numbers: " + evenNumber.toString();
odd.textContent = "Odd Numbers: " + oddNumber.toString();


console.log("Even Numbers:", evenNumber);
console.log("Odd Numbers:", oddNumber);

