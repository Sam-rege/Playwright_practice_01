function findDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}
console.log(findDuplicates([1, 2, 2, 3, 4, 4])); // [2, 4]