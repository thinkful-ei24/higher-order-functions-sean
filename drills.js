
let repeat = function(fn, n) {
  for(let i=0; i<n; i++) {
    fn();
  }
}

function hello() {
  console.log("Hello world");
}

function goodbye() {
  console.log("Goodbye world");
}

repeat(hello, 5);
repeat(goodbye, 5);

function filter(arr, fn) {
    // TASK: Define your function here
    let newArray = [];
    for(let element of arr) {
      // limits confusing behavior if fn is poorly defined
      if(fn(element) === true) {
        newArray.push(element);
      }
    }
    return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

console.log(filter(myNames, (element) => element[0] === 'R'))

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return (location) => {
    warningCounter++;
    let s = warningCounter === 1 ? '' : 's';
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time${s} today!`);
  }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const floodWarning = hazardWarningCreator('Risk of flash floods');
const ogreWarning = hazardWarningCreator('Ogre');

rocksWarning('Main St and Pacific Ave');
// => DANGER There is a Rocks on the Road hazard at Main St and Pacific Ave
// => The Rocks on the Road hazard has triggered 1 time(s) today!

floodWarning('Manitou');
floodWarning('Atlantas');

rocksWarning('Centinela Ave and Olympic Blvd');
// => DANGER There is a Rocks on the Road hazard at Centinela Ave and Olympic Blvd
// => The Rocks on the Road hazard has triggered 2 time(s) today!
ogreWarning("the swamp");

function walkTurtle(turtleArr) {
  let stepArray = turtleArr.filter(pt => pt[0] >= 0 && pt[1] >= 0)
        .map(pt => pt[0]+pt[1]);
  stepArray.forEach(step => {
    console.log(`${step} ${step === 1 ? 'step' : 'steps'} taken.`);
  });
}

const turtle = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
walkTurtle(turtle);
