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
let sum = 0;
data.forEach(val => {
  sum += val.nilai;
});

console.log("Nilai rata-rata (versi manual): ", sum / data.length);

/* get rata-rata menggunakan reduce, jika 2 dimensi/lebih harus membuat inisialisasi dulu misalnya 0 => reduce(function(sum,item), 0) */
const sumV2 = data.reduce((total, item) => total + item.nilai, 0);

console.log("Nilai rata-rata (versi reduce): ", sumV2 / data.length);

/**
 * Cara 3 lebih pero, membuat fungsi khusus
 */
const rataArray = arr =>
  arr.reduce((total, item) => total + item.nilai, 0) / arr.length;

console.log("Nilai rata-rata (versi function): ", rataArray(data));

/* anak yang mendapat nilai 90 */
const filterData = data.filter(val => val.nilai === 90);

console.log("Siswa dengan nilai 90: ");
filterData.forEach(val => {
  console.log("- ".concat(val.nama));
});
