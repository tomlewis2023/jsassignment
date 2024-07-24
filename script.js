// //Prompt the user to enter a number between 0 and 1 million.
// If the number does not fall in the specified range,
// give a message as "Invalid number". 
// If number is valid, display in the screen,
// the sum of numbers upto the given number. 

// Example: if input number is 5, output should be as follows
// "Sum of numbers up to 5 is 15"


let num = parseInt(prompt("Enter the number between 0 and 1 million"));
let sum = 0;

if (num > 0 && num <= 1000000) {
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
} else {
  alert("Refresh the page and reenter the number between 0 and 1 million");
}

document.write(`Sum of numbers up to ${num} is ${sum}`);
