var code = require('../js/main.js');



describe('largest', function() {
  it('takes three numbers and returns the largest one', function() {
    expect(code.largest(9, 76, 13)).toEqual(76);
    expect(code.largest(11, 9, 3)).toEqual(11);
    expect(code.largest(8, 65, 99)).toEqual(99);
  });
});


describe('randomOdds', function(){
  it('takes a random num and returns all odd nums from 40 to the num in an array', function(){
    expect(code.randomOdds(50)).toEqual([41, 43, 45, 47, 49]);
    expect(code.randomOdds(45)).toEqual([41, 43, 45]);
    expect(code.randomOdds(101)).toEqual("Number has to be between 0 and 100");
  });

  it('returns the number if the number is less than 40', function(){
    expect(code.randomOdds(30)).toEqual(30);
  });
});


describe('evenNums', function(){
  it('takes random number and returns all even numbers up to that num in an array', function(){
    expect(code.evenNums(12)).toEqual([0,2,4,6,8,10]);
    expect(code.evenNums(101)).toEqual("Number has to be between 0 and 100");
  });
});


describe('oddsUpAndDown', function(){
  it('returns all odd nums from 40 up to random number in an array', function(){
    expect(code.oddsUpAndDown(50)).toEqual([41, 43, 45, 47, 49]);
    expect(code.oddsUpAndDown(101)).toEqual("Number has to be between 0 and 100");
  });

  it('returns all odd nums from 40 down to random number in an array', function(){
      expect(code.oddsUpAndDown(33)).toEqual([39, 37, 35, 33]);
    });
});


describe('digitSum', function(){
  it('returns the sum of all digits in a numbers', function(){
    expect(code.digitSum(1049)).toEqual(14);
    expect(code.digitSum(1)).toEqual(1);
    expect(code.digitSum(11111)).toEqual("Number has to be between 0 and 10,000");
  });
});


describe('sumToOneDigit', function(){
  it('should take a number and continue to sum the digits until the answer is one digit.', function(){
    expect(code.sumToOneDigit(1049)).toEqual(5);
    expect(code.sumToOneDigit(120000)).toEqual("Number has to be between 0 and 10,000");
    expect(code.sumToOneDigit(9999)).toEqual(9);
  });
});


describe('smallerNumber', function(){
  it('returns the smallest number that each of two numbers are divisible by, with no remainder', function(){
    expect(code.smallerNumber(9, 6)).toEqual(3);
    expect(code.smallerNumber(10, 15)).toEqual(5);
    expect(code.smallerNumber(200, 6)).toEqual("Numbers have to be between 0 and 100");
    expect(code.smallerNumber(9, -1)).toEqual("Numbers have to be between 0 and 100");
  });
});


describe('leastCommonMultiple', function(){
  it('returns the least common multiple of two numbers', function(){
    expect(code.leastCommonMultiple(8, 6)).toEqual(24);
    expect(code.leastCommonMultiple(400, -1)).toEqual("Numbers have to be between 0 and 100");
  });
});

describe('aveStandDev', function(){
  it('returns the average and standard deviation of two numbers', function(){
    expect(code.aveStandDev(79, 97)).toEqual("The mean is 88 and the standard deviation is 9");
    expect(code.aveStandDev(78, 16)).toEqual("The mean is 47 and the standard deviation is 31");
  });
});

