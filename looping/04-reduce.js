/**
 * Reduce
 * dapat digunakan untuk operasi selama perulangan, ex: penjumlahan, pengurangan, perkalian atau pembagian data
 */
const data = [1, 2, 3];
const newData = data.reduce((hasil, val) => {
  console.log(
    "hasil: "
      .concat(hasil)
      .concat("; val: ")
      .concat(val)
  );
  return hasil * val;
});

console.log(newData);
