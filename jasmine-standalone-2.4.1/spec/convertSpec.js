var inchCentimeters = function() {

  expect(Convert.inToCm(5).toEqual(12.7));
};

var feetMetres = function() {

  expect(Convert.ftToM(50).toEqual(15.24));
};

var milesKilometers = function() {

  expect(Convert.mToKm(500).toEqual(804.672));
};

describe("Convert library", function() {

  it('Accurately converts inches to centimetres', inchCentimeters);
  it('Accurately converts feet to metres', feetMetres);
  it('Accurately converts miles to kilometres', milesKilometres);
});
