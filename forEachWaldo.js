function findWaldo(arr, found) {
  arr.forEach(function(name) {
    if (name === "Waldo") {
      found(arr.indexOf(name));
    }
  });
}
function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
