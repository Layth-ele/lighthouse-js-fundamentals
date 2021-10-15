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

                    <<<<< Voting Station Calculation  Assignment3 >>>>
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

                    <<<<< X Marks the Perfect Shot  Assignment4 >>>>
############################################################################
*/

const moves = ["north", "north", "west", "west", "north", "east", "north"];
let finalPosition = (moves) => {
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
