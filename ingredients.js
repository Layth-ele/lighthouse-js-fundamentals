/*
############################################################################

         <<<<< Iterating Over Arrays: Banana Bread Assignment >>>>
############################################################################
*/
const ingredients = [
  "eggs",
  "milk",
  "flour",
  "sugar",
  "baking soda",
  "baking powder",
  "chocolate chips",
  "bananas",
];

// <<<<< Iterating Over Arrays: Banana Bread Using While  >>>>

console.log("Kitchen stuff to pack:");
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// <<<<< Iterating Over Arrays: Banana Bread Using For  >>>>

console.log("Kitchen stuff to pack:");
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// <<<<< Iterating Over Arrays: Reverse  Using While  >>>>

console.log("Kitchen stuff to pack:");
let i = ingredients.length - 1;
while (i >= 0) {
  console.log(ingredients[i]);
  i--;
}

// <<<<< Iterating Over Arrays: Reverse  Using For  >>>>

console.log("Kitchen stuff to pack:");
for (let i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}
