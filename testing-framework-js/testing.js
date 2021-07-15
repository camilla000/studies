'use strict';

let expect = (actual) => {
  return {

    toEqual: function(expected) {
      if (actual === expected) {
        console.log(actual)
        console.log("Pass")
      } else {
        console.log(expected);
        console.log("Fail")}
    }
  }
}

function it(label, callback) {
  console.log(` Test: ${label}`);
  callback();
  
}
it('2 + 2 is equal to 4', function () {expect(2+2).toEqual(4)});
it('2 + 3 is equal to 4', function () {expect(2+2).toEqual(5)});