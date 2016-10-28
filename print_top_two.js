// modifying the histogram function, add logic to print the top 2 most frequently used letters in the string.

function compare(a, b) {
  return a - b;
}

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
  var list = [];
  for (item in hist) {
    list.push(hist[item]);
  }
  list.sort(compare).reverse()
  var max1 = list[0];
  var max2 = list[1];
  var new_obj = {};
  for (char in hist) {
    if (hist[char] === max1 || hist[char] === max2) {
      new_obj[char] = hist[char];
    }
  }
  return new_obj;
}

console.log(histogram("bananas"));
