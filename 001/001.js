// convert a string to an interger. fun solution is using the + operator on i. 

function convertString(str) {
  return str
}

// return the value of i doubled.

function returnDouble(i) {
  return i
}

// a clock shows the `h` hours, `m` minutes and `s` seconds after midnight. 
// write a functin which returns the time since midnight in milliseconds

//example
// h = 0;
// m = 1
// s = 1

// result = 61000

// 1 second is 1000 milliseconds
// 1 minute is 1000 * 60 milliseconds
// 1 hour is 1000 * 60 * 60 milliseconds

function pastMidnight(h,m,s) {
  return (h*1000*60*60) + (m*1000*60) + (s*1000)
}

console.log(pastMidnight(0,1,1))

// make two functions, `max` and `min` that receive an array of numbers as an input, and return the largest and lowest numbers of that list, respectively. 

var min = list => Math.min(...list);
console.log(min([1,2,3,5]))

var max = list => Math.max(...list); // use the spread operator to convert the array to distinct variables
console.log(max([1,2,3,5]))


// given a string, return an array of each word in the string. 
function string2Array(string) {
  return string.split(' ')
}

console.log(string2Array('Hello World!'))
console.log(string2Array(`Charlie don't surf!`))
