/*
############################################################################

                          <<<<< isOdd function Assignment >>>>
############################################################################
*/

const isOdd = function (num) {
  return num % 2 !== 0;
};

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));

/*
############################################################################

                    <<<<< Voting Station Calculation  Assignment >>>>
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
