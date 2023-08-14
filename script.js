// Write your JavaScript code here!

// 
window.addEventListener("load", function() {
    const form = document.getElementById("launchForm");
    const faultyItems = document.getElementById('faultyItems');
    

    
    form.addEventListener("submit", function(event) {
        let pilotNameInput = document.querySelector("input[name = pilotName]");
        let copilotNameInput = document.querySelector("input[name = copilotName]");
        let fuelLevelInput = document.querySelector("input[name = fuelLevel]");
        let cargoMassInput = document.querySelector("input[name = cargoMass]");
        let list = faultyItems;
        

        formSubmission(document, list, pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value);

        event.preventDefault();
    });

    let listedPlanets;
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
    }).then(function () {
        let pickedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(
            document,
            pickedPlanet.name,
            pickedPlanet.diameter,
            pickedPlanet.star,
            pickedPlanet.distance,
            pickedPlanet.moons,
            pickedPlanet.image
        );
    });
});
