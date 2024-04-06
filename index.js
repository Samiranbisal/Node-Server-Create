const http = require("http");

const sp = http.createServer((req, resp) => {
  console.log("Hello Every One");
  resp.end("Hii Bro");
});

sp.listen(8000, () => {
  console.log("SERVER START");
});
