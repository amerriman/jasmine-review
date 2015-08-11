// add scripts
module.exports = {

  //1
  largest : function(numA, numB, numC){
    if (numA > numB && numA > numC){
      return numA;
    }
    else if (numB > numA && numB > numC){
      return numB;
    }
    else {
      return numC;
    }
  },


  //2
  randomOdds : function(num){
    var numArray = [];
    if(num > 100 || num < 0) {
      return "Number has to be between 0 and 100";
    }
    if (num < 40){
      return num;
    }
    if(num > 40){
      for (var i = 41; i <=num; i+=2) {
        numArray.push(i);
      }
    }
    return numArray;
  },

  //3
  evenNums : function(num){
    var numArray = [];
    if(num > 100 || num < 0) {
      return "Number has to be between 0 and 100";
    }
    for (var i = 0; i < num; i+=2) {
      numArray.push(i);
    }
    return numArray;
  },


  //4
  oddsUpAndDown : function(num){
    var numArray = [];
    if(num > 100 || num < 0) {
      return "Number has to be between 0 and 100";
    }
    if(num > 40){
      for (var i = 41; i <=num; i+=2) {
        numArray.push(i);
      }
    }
    else{
      for (var j = 39; j >=num; j-=2){
        numArray.push(j);
      }
    }
    return numArray;
   },

  //5
  digitSum : function(num){
    if(num > 10000 || num < 0) {
      return "Number has to be between 0 and 10,000";
    }
       var array = num.toString().split('').map(Number);
      var total = 0;
      for (i=0; i<array.length; i++){
          total += array[i];
      }
      return total;
  },

  //6
  sumToOneDigit : function(num){
    if(num > 10000 || num < 0) {
      return "Number has to be between 0 and 10,000";
    }
    var array = num.toString().split('').map(Number);
    var total = 0;
    for (i=0; i<array.length; i++){
      total += array[i];
    }
      if (total < 9){
        return total;
      }
      else {
        var newArray = total.toString().split('').map(Number);
        var newTotal = 0;
        for (var i = 0; i < newArray.length; i++) {
          newTotal += newArray[i];
        }
        return newTotal;
      }
  },

  //7
  smallerNumber : function(numA, numB){
    if(numA > 100 || numA < 0 || numB > 100 || numB < 0) {
      return "Numbers have to be between 0 and 100";
    }
    i=2;
    while(i<=6){
      i++;
      if (numA % i === 0 && numB % i === 0){
        return i;
      }
    }
  return "Sorry!";
  },

  //8
  leastCommonMultiple : function(numA, numB){
    if(numA > 100 || numA < 0 || numB > 100 || numB < 0) {
      return "Numbers have to be between 0 and 100";
    }
    for (var i=numA; i<10000; i+=numA){
      for (var j=numB; j<10000; j+=numB){
        if(i === j){
          return i;
        }
      }
    }
  },

  //9
  aveStandDev : function(numA, numB){
    if(numA > 100 || numA < 0 || numB > 100 || numB < 0) {
      return "Numbers have to be between 0 and 100";
    }
    var mean = (numA + numB) / 2;

    var varA = numA - mean;
    var varB = numB - mean;

    varA *= varA;
    varB *= varB;

    var variance = (varA + varB) / 2;

    var standardDev = Math.sqrt(variance);


    return "The mean is " + mean + " and the standard deviation is " + standardDev;
  },

};


