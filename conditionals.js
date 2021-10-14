/*
############################################################################

                          <<<<< if Statements>>>>
############################################################################
*/

/*
//////////////////////////////////////////////////////////////////////////////
                                 exercise 1
//////////////////////////////////////////////////////////////////////////////
*/

// const raining = true;

// if (raining) {
//   console.log("Don't forget your umbrella!");
// }

/*
///////////////////////////////////////////////////////////////////////////////
                                 exercise 2
//////////////////////////////////////////////////////////////////////////////
*/

// const raining = true;
// const cold = false;

// if (raining) {
//   console.log("Don't forget your umbrella!");
// }

// if (cold) {
//   console.log("Make sure you pick out a scarf!");
// }

// console.log("Now you're ready to go outside!");

/*
///////////////////////////////////////////////////////////////////////////////
                                 exercise 3
//////////////////////////////////////////////////////////////////////////////
*/ //

//  exercise 3
// const cold = false;

// if (cold) {
//   console.log("Make sure you pick out a scarf!");
// } else {
//   console.log("Short sleeves are fine.");
// }

/*
///////////////////////////////////////////////////////////////////////////////
                                 exercise 4
//////////////////////////////////////////////////////////////////////////////
*/

// const temperature = 12;

// if (temperature < 0) {
//   console.log("Make sure you pick out a scarf!");
// } else if (temperature < 15) {
//   console.log("Short sleeves won't cut it!");
// } else {
//   console.log("Short sleeves are fine.");
// }

// console.log("Now you're ready to go outside!");

// const temperature = -1;  /// the program to tell us to pick a scarf

// if (temperature < 0) {
//   console.log("Make sure you pick out a scarf!");
// } else if (temperature < 15) {
//   console.log("Short sleeves won't cut it!");
// } else {
//   console.log("Short sleeves are fine.");
// }

// console.log("Now you're ready to go outside!");

// const temperature = 16 ;  /// the program to tell us Short sleeves are fine.

// if (temperature < 0) {
//   console.log("Make sure you pick out a scarf!");
// } else if (temperature < 15) {
//   console.log("Short sleeves won't cut it!");
// } else {
//   console.log("Short sleeves are fine.");
// }

// console.log("Now you're ready to go outside!");

/*
############################################################################

                          <<<<<Logical Operator>>>>
############################################################################
*/

/*
///////////////////////////////////////////////////////////////////////////////
                                 exercise 1
//////////////////////////////////////////////////////////////////////////////
*/

// const isCitizen = true;
// const age = 26;

// if (isCitizen && age > 18) {
//   console.log("You are eligible to vote.");
// }

/*
///////////////////////////////////////////////////////////////////////////////
                                 exercise 2
//////////////////////////////////////////////////////////////////////////////
*/

// let temperature = 43;

// if (temperature < -40 || temperature > 40) {
//   console.log("Maybe going outside isn't such a great idea…");
// }

/*
///////////////////////////////////////////////////////////////////////////////
                                 exercise 3
//////////////////////////////////////////////////////////////////////////////
*/

// let raining = false;

// if (!raining) {
//   console.log("Leave your umbrella at home!");
// }

/*
///////////////////////////////////////////////////////////////////////////////
                                Which School exercise 
//////////////////////////////////////////////////////////////////////////////
*/

// const whichSchool = function (age) {
//   return age <= 13
//     ? `you are ${age}, you are eligible to go to Elementary School`
//     : age <= 18 && age > 13
//     ? `you are ${age}, you are eligible to go to Secondary School`
//     : `you are ${age}, you are eligible to go to Lighthouse Labs`;
// };
// console.log(whichSchool(44));
