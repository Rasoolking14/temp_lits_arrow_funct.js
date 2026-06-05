// TODO: Create a multiline string using template literals
const multilineString = `
Welcome to COLY Clothing!
We offer categories, cart, checkout, and profile features.
Shop with ease and style.
`;

console.log(multilineString);

// TODO: Create a function that uses template literals for HTML generation
const generateUserCard = (name, age) => {
  return `
    <div class="user-card">
      <h2>${name}</h2>
      <p>Age: ${age}</p>
    </div>
  `;
};

console.log(generateUserCard("Rasool", 25));

// TODO: Convert regular functions to arrow functions
// Regular function
function greet(name) {
  return "Hello, " + name + "!";
}
// Converted to arrow function
const greetArrow = (name) => `Hello, ${name}!`;

console.log(greetArrow("Rasool"));

// TODO: Use arrow functions with array methods
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
const evens = numbers.filter(num => num % 2 === 0);
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log("Doubled:", doubled); // [2,4,6,8,10]
console.log("Evens:", evens);     // [2,4]
console.log("Sum:", sum);         // 15
