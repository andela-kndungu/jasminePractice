// Empty object to which function properties will be added
Convert = function() {};

// Add functions as properties
Convert.prototype.inToCm = function(inches) {
  
  return inches * 2.54;
};
