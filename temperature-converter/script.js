let celcius = document.querySelector(".celcius");
let farenheit = document.querySelector(".farenheit");

celcius.addEventListener("keyup", (e) => {
  let celciusValue = Number(e.target.value);
  let convertToFarenheit = (celciusValue * 9) / 5 + 32;
  farenheit.value = convertToFarenheit.toFixed(2);
});

farenheit.addEventListener("keyup", (e) => {
  let farenheitValue = Number(e.target.value);
  let convertToCelcius = ((farenheitValue - 32) * 5) / 9;
  celcius.value = convertToCelcius.toFixed(2);
});
