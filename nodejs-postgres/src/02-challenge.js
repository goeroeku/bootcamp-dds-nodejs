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
  const qry = await pool.query("SELECT * FROM karyawan");
  res.send({
    success: true,
    data: qry.rows,
    message: "Get data Karyawan",
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

  res.send({
    success: true,
    data: qry.rows,
    message: "Post data karyawan",
    code: 200
  });

  next();
});

/**
 * Challenge 1: show data by id
 */
server.get("/api/karyawan/:id", async (req, res, next) => {
  const qry = await pool.query(
    `SELECT * FROM karyawan WHERE nomor_induk='${req.params.id}'`
  );
  res.send({
    success: true,
    data: qry.rows,
    message: "Get data Karyawan by Id",
    code: 200
  });

  next();
});

/**
 * Challenge 2: delete data by id
 */
server.del("/api/karyawan/:id", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Methods", "*");

  const qry = pool.query(`DELETE FROM karyawan WHERE id='${req.params.id}'`);
  res.send({
    success: true,
    data: [qry.rows],
    message: "Delete data by Id",
    code: 200
  });
  next();
});

/**
 * Challenge 3: update data by id
 */
server.put("/api/karyawan/:id", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Methods", "*");

  const qry = pool.query(`UPDATE karyawan 
    SET nomor_induk='${req.body.nomor_induk}',
      nama='${req.body.nama}',
      alamat='${req.body.alamat}',
      tanggal_lahir='${req.body.tanggal_lahir}',
      tanggal_masuk='${req.body.tanggal_masuk}'
    WHERE id='${req.params.id}'`);
  res.send({
    success: true,
    data: [qry.rows],
    message: "Update data by Id",
    code: 200
  });
  next();
});

server.listen(8080, () => {
  console.log("%s listening at %s", server.name, server.url);
});
