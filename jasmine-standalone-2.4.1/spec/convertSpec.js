describe("Convert library", function() {

  // Object through which functions will be accessed
  var convert;

  // For testing spies
  var foo;

  // Initialise object before running specs
  beforeAll(function() {

    convert = new Convert();

    // Will be spied on
    foo = {
      isItCalled: function() {
        var a = 'I want to be called';
      },
      called5times: function() {
        var b = 'I want to be called five times';
      }
    };

    // Start spyin
    spyOn(foo, 'isItCalled');
    spyOn(foo, 'called5times');

    // For the test to pass
    for (var i = 0; i < 5; i++) {

      foo.called5times();
    }

    foo.isItCalled();
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

  it('Accurately converts light years to kilometres', function() {

    pending('Yet to implement the function');
    expect(convert.lyToKm(1)).toEqual(9.461e+12);
  });

  describe('Calls all the necessary functions', function() {

    it('Calls a function', function() {

      expect(foo.isItCalled).toHaveBeenCalled();
    });

    it('Calls a function five times', function() {

      expect(foo.called5times).toHaveBeenCalledTimes(5);
    });
  });
});
