const restify = require("restify");
const pg = require("pg");

const config = {
  host: "localhost",
  port: "5432",
  database: "tefa",
  user: "postgres",
  password: "postgres",
  max: 10,
  idleTimeoutMillis: 30000
};

const pool = new pg.Pool(config);

const server = restify.createServer({
  name: "myapp",
  version: "1.0.0"
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

/**
 * penulisan endpoint api tidak perlu menggunakan singular (pake s),
 * jika ingin mendapatkan data by id cukup buat endpoint/:id
 * atau endpoint/{id}
 */
server.get("/api/karyawan", async (req, res, next) => {
  const array = await pool.query("SELECT * FROM karyawan");
  res.send({
    success: true,
    data: array.rows,
    message: "Get Data Karyawan",
    code: 200
  });

  next();
});

/** tanda ` (grave) akan meng-ignore penulisan dengan enter
 * dan tulisan didalamnya dianggap sebagai string
 */

server.post("/api/karyawan", (req, res, next) => {
  const data = req.body;
  const qry = pool.query(`INSERT INTO karyawan(
    nomor_induk,
    nama,
    alamat,
    tanggal_lahir,
    tanggal_masuk
  ) VALUES (
    '${data.nomor_induk}',
    '${data.nama}',
    '${data.alamat}',
    '${data.tanggal_lahir}',
    '${data.tanggal_masuk}'
  )
  `);

  res.send({ data: qry.rows });

  next();
});

server.listen(8080, () => {
  console.log("%s listening at %s", server.name, server.url);
});
