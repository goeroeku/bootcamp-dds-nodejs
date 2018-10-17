const data = [1, 2, 3];
const newData = data.filter((val, key) => {
  console.log(
    "val: "
      .concat(val)
      .concat("; key: ")
      .concat(key)
  );
  return val !== 2;
});

console.log(newData);
