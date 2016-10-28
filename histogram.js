// Write a function histogram which takes a string as argument. It will tally(histogram) the number of times each character appears in the string, and return the tally as an object. Example:

function histogram(phrase) {
  var hist = {};
  for (var index in phrase) {
    var char = phrase[index];
    if (!hist[char]) {
      hist[char] = 1;
    } else {
      hist[char] += 1;
    }
  }
  return hist;
}

console.log(histogram("bananas"));
