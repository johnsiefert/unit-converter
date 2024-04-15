const convertBtn = document.querySelector("#convert-btn");
const output = document.querySelector(".convert-box");
const resultLength = document.querySelector('.result-length');
const resultVolume = document.querySelector(".result-volume");
const resultMass = document.querySelector('.result-mass');

const feet = 3.2808 // 1 meter = 3.281 feet
const gallon = .264// 1 liter = 0.264 gallon
const pound = 2.204// 1 kilogram = 2.204 pound


function renderConvert(){
renderValues()
}

function renderValues() {
      let outputValue = output.value;
      let feetValue = outputValue * feet
      let gallonValue = outputValue * gallon
      let poundValue = outputValue * pound

    resultLength.textContent = `${outputValue} meters = ${Number(feetValue).toFixed(3)} feet | ${outputValue} feet = ${Number(outputValue / feet).toFixed(3)} meters`;
    resultVolume.textContent = `${outputValue} liters = ${Number(gallonValue).toFixed(3)} gallons | ${outputValue} gallons = ${Number(outputValue / gallon).toFixed(3)} liters`;
    resultMass.textContent = `${outputValue} kilos = ${Number(poundValue).toFixed(3)} pounds | ${outputValue} pounds = ${Number(outputValue / pound).toFixed(3)} kilos`;

}



convertBtn.addEventListener("click", renderConvert)