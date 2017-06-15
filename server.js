var http = require("http");
var fs = require("fs");

function test() {
  console.log("PORT:", process.env.PORT);
}

if(process.env.PORT == null) {
  process.env.PORT = 3000;
}

var server = http.createServer(requestHandler);
server.listen(process.env.PORT, test());

var index_html = fs.readFileSync("public/index.html");
var error = fs.readFileSync("public/404.html");
var konami_html = fs.readFileSync("public/konami.html");
var off_html = fs.readFileSync("public/off.html");
var on_html = fs.readFileSync("public/on.html");
var sans_html = fs.readFileSync("public/sans.html");
var shapes_html = fs.readFileSync("public/shapes.html");
var sides_html = fs.readFileSync("public/sides.html");

function requestHandler(req, res) {
  if(req.url === "/index.html") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(index_html);
    res.end();
  }

  else if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(index_html);
    res.end();
  }

  else if (req.url === "/konami.html") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(konami_html);
    res.end();
  }

  else if (req.url === "/off.html") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(off_html);
    res.end();
  }

  else if (req.url === "/on.html") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(on_html);
    res.end();
  }

  else if (req.url === "/sans.html") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(sans_html);
    res.end();
  }

  else if (req.url === "/shapes.html") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(shapes_html);
    res.end();
  }

  else if (req.url === "/sides.html") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(sides_html);
    res.end();
  }

  else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.write(error)
    res.end();
  }
}
