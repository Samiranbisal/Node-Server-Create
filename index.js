const http = require("http");

const sp = http.createServer((req, resp) => {
  switch (req.url) {
    case "/":
      resp.end("homePage");
      break;
    case "/about":
      resp.end("aboutPage");
      break;
    default:
      resp.end("404 Not Found");
  }

  // resp.end("Hii Bro");
});

sp.listen(8000, () => {
  console.log("SERVER START");
});
