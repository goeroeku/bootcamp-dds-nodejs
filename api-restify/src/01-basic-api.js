/**
 * This script without eslint checking
 * disble eslint by eslintignore
 * or
 * using block /* eslint-disable */ and /* eslint-enable */
 */

const restify = require("restify");

const server = restify.createServer({
  name: "myapp",
  version: "1.0.0"
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

/* contoh menggunakan request parameter */
server.get("/tefa/:name", function(req, res, next) {
  res.send(req.params);
  return next();
});

server.get("/tefa/:name/:institusi", function(req, res, next) {
  res.send(req.params);
  return next();
});

/* end contoh parameter */

/* contoh menggunakan request query */
server.get("/tefa", (req, res, next) => {
  res.send(req.query);
  return next();
});
/* end contoh query */

server.listen(8080, function() {
  console.log("%s listening at %s", server.name, server.url);
});
