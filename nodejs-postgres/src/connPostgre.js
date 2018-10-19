const pg = require("pg");
var restify = require("restify");
const config = {
  user: "postgres", // env var: PGUSER
  database: "postgres", // env var: PGDATABASE
  password: "123456789", // env var: PGPASSWORD
  host: "localhost", // Server hosting the postgres database
  port: 5432, // env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
};

const pool = new pg.Pool(config);

const server = restify.createServer({
  name: "myapp",
  version: "1.0.0"
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get("/api/karyawan/get", async (req, res, next) => {
  let array = await pool.query("SELECT * from karyawan");
  res.send({
    success: true,
    data: array.rows,
    message: "Get Data Karyawan",
    code: 200
  });
});

server.post("/api/karyawan/post", (req, res, next) => {
  let data = req.body;
  console.log(data.nomor_induk);
  let array = pool.query(`INSERT INTO karyawan (
    nomor_induk,
    nama,
    alamat,
    tanggal_lahir,
    tanggal_masuk
  )
  VALUES
    ('${data.nomor_induk}','${data.nama}','${data.alamat}','${
    data.tanggal_lahir
  }','${data.tanggal_masuk}');`);

  res.send({ data: array.rows });
});
server.listen(9000, function() {
  console.log("%s listening at %s", server.name, server.url);
});
