/**
 * Solusi agar flow eksekusi sesuai dengan skenario, misalnya data ditampilkan setelah proses createPost terlebih dahulu (tanpa menggubah waktu setTime, sebagai ilustrasi bawah setTime ini memakan waktu yang lebih cepat/lebih lambat)
 * Solusi 2: menggunakan async - await
 * ** kelemahan menggunakan callback, akan terjadi callback hell (callback yang bertumpuk/callback didalam callback, semakin besar proses, callback bisa semakin dalam)
 */

const posts = [
  { title: "Post one", body: "This i post one" },
  { title: "Post two", body: "This i post two" }
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.map(post => {
      output += post.title + " ";
    });
    console.log(output);
  }, 1000);
}

function createPost(post) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      posts.push(post);
      res() || rej("Error something went wrong");
    }, 2000);
  });
}

async function run() {
  await createPost({ title: "Post three", body: "This is post three" });
  getPosts();
}

run();
