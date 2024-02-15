function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemperature").value);
    const inputScale = document.getElementById("inputScale").value;
    const outputScale = document.getElementById("outputScale").value;

    let convertedTemp = 0;

    if (inputScale === "C") {
        if (outputScale === "C") {
            convertedTemp = inputTemp;
        } else if (outputScale === "F") {
            convertedTemp = (inputTemp * 9/5) + 32;
        }
    } else if (inputScale === "F") {
        if (outputScale === "C") {
            convertedTemp = (inputTemp - 32) * 5/9;
        } else if (outputScale === "F") {
            convertedTemp = inputTemp;
        }
    }

    document.getElementById("output").innerText = `Converted Temperature: ${convertedTemp} ${outputScale}`;
}
