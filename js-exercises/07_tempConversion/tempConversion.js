const convertToCelsius = function(temp) {
  temp -= 32;
  temp *= 5/9;
  if(Math.floor(temp) == temp) return temp;
  else return +temp.toFixed(1);
};

const convertToFahrenheit = function(temp) {
  temp *= 9/5;
  temp += 32;
  if(Math.floor(temp) == temp) return temp;
  return +temp.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
