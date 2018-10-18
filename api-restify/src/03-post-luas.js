const restify = require("restify");

const server = restify.createServer({
  name: "myapp",
  version: "1.0.0"
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

/* post */
server.post("/tefa", (req, res, next) => {
  res.send(req.body);
  return next();
});

/* post luas segitiga */
server.post("/tefa/luassegitiga", (req, res, next) => {
  const luas = (req.body.alas * req.body.tinggi) / 2;
  res.send({ luasSegitiga: luas });
  return next();
});

server.listen(8080, () => {
  console.log("%s listening at %s", server.name, server.url);
});
