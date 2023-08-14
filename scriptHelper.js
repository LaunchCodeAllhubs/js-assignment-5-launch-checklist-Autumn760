// Write your helper functions here!
require("isomorphic-fetch");


function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  let missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = `
<h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
<img src = "${imageUrl}">
`;
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(Number(testInput))) {
    return "Not a Number";
  } 
  else {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let launchStatus = document.getElementById("launchStatus");
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");

  if (
    validateInput(pilot) === "Is a Number" ||
    validateInput(pilot) === "Empty"
  ) {
    pilotStatus.innerHTML = "Pilot's name is not valid";
    alert("The pilot's name is not valid.");
  } else {
    list.style.visibility = "visible"
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
  }

  if (
    validateInput(copilot) === "Is a Number" ||
    validateInput(copilot) === "Empty"
  ) {
    copilotStatus.innerHTML = "Co-pilot's name is not valid";
    alert("The co-pilot's name is not valid.");
  } else {
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
  }

  if (
    validateInput(fuelLevel) === "Not a Number" ||
    validateInput(fuelLevel) === "Empty"
  ) {
    fuelStatus.innerHTML = `Fuel level is invalid`;
    alert("The fuel level input is not valid.");
  } else if (Number(fuelLevel) < 10000) {
    fuelStatus.innerHTML = `Fuel level too low for launch`;
  } else {
    fuelStatus.innerHTML = `Fuel level high enough for launch`;
  }

  if (
    validateInput(cargoLevel) === "Not a Number" ||
    validateInput(cargoLevel) === "Empty"
  ) {
    cargoStatus.innerHTML = `Cargo mass is invalid`;
    alert("The cargo mass input is not valid.");
    // event.preventDefault();
  } else if (Number(cargoLevel) > 10000) {
    cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
  } else {
    cargoStatus.innerHTML = `Cargo mass low enough for launch`;
  }

  if (
    validateInput(pilot) === "Is a Number" ||
    validateInput(pilot) === "Empty" ||
    validateInput(copilot) === "Is a Number" ||
    validateInput(copilot) === "Empty" ||
    validateInput(fuelLevel) === "Not a Number" ||
    Number(fuelLevel) < 10000 ||
    validateInput(cargoLevel) === "Not a Number" ||
    Number(cargoLevel) > 10000 ||
    validateInput(cargoLevel) === "Empty"
  ) {
    list.style.visibility = "visible";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "rgb(199, 37, 78)";
  } else {
    list.style.visibility = "visible";
    launchStatus.innerHTML = "Shuttle is Ready for Launch";
    launchStatus.style.color = "rgb(65, 159, 106)";
  }

  if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === "") {
    alert("All fields are required!");
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });
  return planetsReturned;
}

function pickPlanet(planets) {
  let pickedPlanetNum = Math.floor(Math.random() * planets.length);
  pickedPlanet = planets[pickedPlanetNum];
  return pickedPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
