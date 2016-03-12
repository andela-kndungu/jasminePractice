describe("Convert library", function() {

  // Object through which functions will be accessed
  var convert;

  // Initialise object before running specs
  beforeEach(function() {

    convert = new Convert();
  });

  // The specs, one for each function in the object
  it('Accurately converts inches to centimetres', function() {

    expect(convert.inToCm(1)).toEqual(2.54);
  });

  it('Accurately converts feet to metres', function() {

    expect(convert.ftToM(50)).toEqual(15.24);
  });

  it('Accurately converts miles to kilometres', function() {

    expect(convert.mToKm(500)).toEqual(804.67);
  });
});
