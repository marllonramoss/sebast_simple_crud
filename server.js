const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Middleware para converter ID da URL para número
server.use((req, res, next) => {
  if (req.params.id) {
    req.params.id = Number(req.params.id); // Converte ID para número
  }
  next();
});

server.use(router);
server.listen(5000, () => {
  console.log("JSON Server está rodando em http://localhost:5000");
});
