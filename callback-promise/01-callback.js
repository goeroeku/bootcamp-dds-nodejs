/**
 * Solusi agar flow eksekusi sesuai dengan skenario, misalnya data ditampilkan setelah proses createPost terlebih dahulu (tanpa menggubah waktu setTime, sebagai ilustrasi bawah setTime ini memakan waktu yang lebih cepat/lebih lambat)
 * Solusi 1: menggunakan callback
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

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: "Post three", body: "This is post three" }, getPosts);
