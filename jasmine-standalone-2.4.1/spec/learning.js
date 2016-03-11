// Specs for testing the addition operator
var addition = function() {

  // Can it handle two numbers?
  it('Correctly adds two numbers', function() {

    expect(1 + 2).toEqual(3);
  });

  // Converts string to number before addition
  it('Correctly adds number and string', function() {

    expect(1 + '2').toEqual(3);
  });
};

describe('Addition operator', addition);
