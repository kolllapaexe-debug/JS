const temperature = Number(prompt("Enter the room temperature (°C):"));
const sensorError = prompt("Is there a sensor error? (true/false):").toLowerCase() === "true";

let climateMessage;
if (sensorError) {
    climateMessage = "Temperature sensor error";
} else {
    if (temperature < 18) {
        climateMessage = "Turn on heating";
    } else if (temperature >= 18 && temperature <= 25) {
        climateMessage = "Comfortable temperature";
    } else {
        climateMessage = "Turn on air conditioner";
    }
}

console.log(climateMessage);
alert(climateMessage);