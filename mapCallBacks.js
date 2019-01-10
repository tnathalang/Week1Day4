var words = ["ground", "control", "to", "major", "tom"];

function map(words, fncallback) {
  var arr = [];
  for (var index of words) {
    arr.push(fncallback(index));
  }
  return arr;
}
console.log(
  map(words, function(word) {
    return word.length;
  })
);

console.log(
  map(words, function(word) {
    return word.toUpperCase();
  })
);

console.log(
  map(words, function(word) {
    return word
      .split("")
      .reverse()
      .join("");
  })
);
