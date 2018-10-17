var data = [1, 2, 3];
var newData = data.map((val, key) => {
  console.log("val: " + val + "; key: " + key);
  return val * 10;
});

console.log(newData);
