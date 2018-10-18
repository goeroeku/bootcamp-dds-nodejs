/**
 * Challenge get average nilai
 * - challenge 1 : from 1 siswa
 * - challenge 2 : from 2 siswa/multiple siswa
 */

const restify = require("restify");

const server = restify.createServer({
  name: "myapp",
  version: "1.0.0"
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

/* challenge show average */
server.post("/tefa/nilai", (req, res, next) => {
  const { nilai } = req.body; // equivalen dgn const nilai = req.body.nilai;
  const avgNilai =
    nilai.reduce((total, item) => total + item.nilai, 0) / nilai.length;
  const hasil = {
    nama: req.body.nama,
    institusi: req.body.institusi,
    avgNilai // equivalen dgn avgNilai: avgNilai
  };
  res.send(hasil);

  return next();
});

/* challenge show average 2 nama, multi data */
server.post("/tefa/nilai-dua-nama", (req, res, next) => {
  // set temp variable
  const data = [];
  req.body.forEach(val => {
    const { nilai } = val;
    const avgNilai =
      nilai.reduce((total, item) => total + item.nilai, 0) / nilai.length;
    const hasil = {
      nama: val.nama,
      institusi: val.institusi,
      avgNilai // equivalen dgn avgNilai: avgNilai
    };
    data.push(hasil);
  });

  res.send(data);

  return next();
});

server.listen(8080, () => {
  console.log("%s listening at %s", server.name, server.url);
});
