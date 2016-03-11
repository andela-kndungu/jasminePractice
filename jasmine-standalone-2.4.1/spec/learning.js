// Specs for testing the addition operator
var addition = function() {

  // Can it handle two numbers?
  it('Correctly adds two numbers', function() {

    expect(1 + 2).toEqual(3);
  });
};

describe('Addition operator', addition);
