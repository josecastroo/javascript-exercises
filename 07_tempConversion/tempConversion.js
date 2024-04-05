const convertToCelsius = function(temperature) {
  let C = 5 / 9 * (temperature - 32);
  return parseFloat(C.toFixed(1));
};

const convertToFahrenheit = function(temperature) {
  let F = 9 / 5 * temperature + 32;
  return parseFloat(F.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
