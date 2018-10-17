var data = [1, 2, 3];
var newData = data.filter((val, key) => {
  console.log("val: " + val + "; key: " + key);
  return val !== 2;
});

console.log(newData);
