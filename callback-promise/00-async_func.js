/**
 * Contoh javascript dengan eksekusi blok
 * walaupun getpost dipanggil terakir, tp karena waktu tunggu posting lebih lama,
 * sehingga hasil yang ditampilkan sebelum proses createPost dijalankan
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
  setTimeout(() => {
    posts.push(post);
  }, 2000);
}

createPost({ title: "Post three", body: "This is post three" });
getPosts();
