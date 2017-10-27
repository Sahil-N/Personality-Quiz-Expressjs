

var tableArray = require("../data/resultsData");


var minIndex = 0;
var winner;


function getSum(total, num) {return total + num;}


//function to find index of lowest value in array.
function indexOfMin(arr) {
  if (arr.length === 0) {
    return -1;
  } 
    var min = arr[0]; 
    var minIndex = 0; 
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      minIndex = i; 
      min = arr[i];
      console.log(minIndex);
      return minIndex;
    }
  }
}





// function to compute score
function computeScore(userchoices){
  minIndex = 0; //reset value of minIndex each time function is called.
  var mathArray = []; //create array of absolute value "scores"
  var comparisonArray = []; // create array for individual array score calculation
  for (var x = 0; x < tableArray.length; x++) {
    for (var o = 0; o < 9; o++) {
      var score = Math.abs(userchoices[o] - tableArray[x].answers[o]);
      comparisonArray[o] = score;   
    }
    (function myFunction() {//calculates score of individual array
      mathArray[x] = comparisonArray.reduce(getSum);
    })();
  }
  indexOfMin(mathArray);
  winner = tableArray[minIndex];
  console.log(winner);
  return winner;
  };


module.exports = computeScore;