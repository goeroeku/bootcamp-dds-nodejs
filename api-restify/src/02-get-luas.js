const restify = require("restify");

const server = restify.createServer({
  name: "myapp",
  version: "1.0.0"
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

/* luas segitiga with parameter */
server.get("/tefa/luassegitiga/:alas/:tinggi", (req, res, next) => {
  const luas = (req.params.alas * req.params.tinggi) / 2;
  res.send({ luasSegitiga: luas });
  return next();
});

/* luas segitiga with query */
server.get("/tefa/luassegitiga", (req, res, next) => {
  const luas = (req.query.alas * req.query.tinggi) / 2;
  res.send({ luasSegitiga: luas });
  return next();
});

server.listen(8080, () => {
  console.log("%s listening at %s", server.name, server.url);
});
