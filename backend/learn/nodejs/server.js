import http from "http";
const PORT = 8000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Context-Type": "application/json" });
  res.end(JSON.stringify({'hi':'wd'}));
});

server.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
