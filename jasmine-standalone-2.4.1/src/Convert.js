// Empty object to which function properties will be added
Convert = function() {};

// Add functions as properties
Convert.prototype.inToCm = function(inches) {

  return inches * 2.54;
};

Convert.prototype.ftToM = function(feet) {

  return feet * 0.3048;
};

Convert.prototype.mToKm = function(miles) {

  return miles * 1.60934;
};
