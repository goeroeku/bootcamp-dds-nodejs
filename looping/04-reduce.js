/**
 * Reduce
 * dapat digunakan untuk operasi selama perulangan, ex: penjumlahan, pengurangan, perkalian atau pembagian data
 */
var data = [1, 2, 3];
var newData = data.reduce((hasil, val) => {
  console.log("hasil: " + hasil + "; val: " + val);
  return hasil * val;
});

console.log(newData);
