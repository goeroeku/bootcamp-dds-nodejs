const data = [1, 2, 3];
const newData = data.map((val, key) => {
  console.log(
    "val: "
      .concat(val)
      .concat("; key: ")
      .concat(key)
  );
  return val * 10;
});

console.log(newData);
