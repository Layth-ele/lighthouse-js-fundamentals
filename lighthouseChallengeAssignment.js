/*
############################################################################

                   <<<<< Lihgthouse Challenge Assignments >>>>
############################################################################
*/

/*
///////////////////////////////////////////////////////////////////////////////
                              Which School Assynment1
//////////////////////////////////////////////////////////////////////////////
*/

const whichSchool = function (age) {
  return age <= 13
    ? `you are ${age}, you are eligible to go to Elementary School`
    : age <= 18 && age > 13
    ? `you are ${age}, you are eligible to go to Secondary School`
    : `you are ${age}, you are eligible to go to Lighthouse Labs`;
};
console.log(whichSchool(44));

/*
//////////////////////////////////////////////////////////////////////////////
                              Loopy Lighthouse Assynment2
//////////////////////////////////////////////////////////////////////////////
*/

let num = 100;

while (num <= 200) {
  num % 3 === 0 && num % 4 !== 0
    ? console.log(" Loopy")
    : num % 4 === 0 && num % 3 !== 0
    ? console.log("Lighthouse")
    : num % 3 === 0 && num % 4 === 0
    ? console.log("LoopyLighthouse")
    : console.log(num);
  num++;
}

/*
############################################################################

                    <<<<< Voting Station Calculation Assignment3 >>>>
############################################################################
*/

const chooseStations = (stations) => {
  let goodStations = [];
  for (const station of stations) {
    const capacity = station[1];
    const type = station[2];
    const stationName = station[0];
    if (capacity >= 20) {
      if (type === "school" || type === "community centre") {
        goodStations.push(stationName);
      }
    }
  }
  return goodStations;
};
const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

console.log(chooseStations(stations));

/*
############################################################################

                    <<<<< X Marks the Perfect Shot Assignment4 >>>>
############################################################################
*/

const moves = ["north", "north", "west", "west", "north", "east", "north"];
const finalPosition = (moves) => {
  let x = 0;
  let y = 0;
  for (let move of moves) {
    move === "north"
      ? y++
      : move === "south"
      ? y--
      : move === "east"
      ? x++
      : move === "west"
      ? x--
      : "NONE";
  }
  return [x, y];
};
console.log(finalPosition(moves));

/*
############################################################################

                    <<<<< Age Calculator Assignment 5 >>>>
############################################################################
*/

const ageCalculator = (name, yearOfBirth, currentYear) => {
  const age = currentYear - yearOfBirth;
  return `${name} is ${age} years old.`;
};
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

/*
############################################################################

                    <<<<< How Many Hundreds Assignment 6 >>>>
############################################################################
*/

const howManyHundreds = (num) => {
  return Math.floor(num / 100);
};
console.log(howManyHundreds(89));
/*
############################################################################

                    <<<<< Area Calculators Assignment 6 >>>>
############################################################################
*/
const calculateRectangleArea = (length, width) => {
  if (length < 0 || width < 0) {
    return undefined;
  } else {
    return length * width;
  }
};

const calculateTriangleArea = (base, height) => {
  if (base < 0 || height < 0) {
    return undefined;
  } else {
    return (base * height) / 2;
  }
};
const calculateCircleArea = (radius) => {
  if (radius < 0) {
    return undefined;
  } else {
    return radius * radius * Math.PI;
  }
};

console.log(calculateRectangleArea(10, 5)); // should print 50
console.log(calculateRectangleArea(1.5, 2.5)); // should print 3.75
console.log(calculateRectangleArea(10, -5)); // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
