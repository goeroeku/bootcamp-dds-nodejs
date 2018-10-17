/**
 * Studi Kasus
 */

const data = [
  {
    nama: "Ade",
    nilai: 80
  },
  {
    nama: "Beni",
    nilai: 90
  }
];

/*  nilai rata-rata */
var sum = 0;
data.forEach(val => {
  sum += val.nilai;
});

console.log("Nilai rata-rata (versi manual): ", sum / data.length);

/* get rata-rata menggunakan reduce, jika 2 dimensi/lebih harus membuat inisialisasi dulu misalnya 0 => reduce(function(sum,item), 0) */
var sum_v2 = data.reduce((sum, item) => {
  return sum + item.nilai;
}, 0);

console.log("Nilai rata-rata (versi reduce): ", sum_v2 / data.length);

/**
 * Cara 3 lebih pero, membuat fungsi khusus
 */
const rataArray = arr => {
  return arr.reduce((total, item) => total + item.nilai, 0) / arr.length;
};
console.log("Nilai rata-rata (versi function): ", rataArray(data));

/* anak yang mendapat nilai 90 */
const filterData = data.filter(val => {
  return val.nilai == 90;
});

console.log("Siswa dengan nilai 90: ");
filterData.forEach(val => {
  console.log("- " + val.nama);
});
