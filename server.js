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
var match_html = fs.readFileSync("public/match.html");
var off_html = fs.readFileSync("public/off.html");
var on_html = fs.readFileSync("public/on.html");
var finish_html = fs.readFileSync("public/uuddlrlrba.html");
var shapes_html = fs.readFileSync("public/shapes.html");
var sides_html = fs.readFileSync("public/sides.html");
var error_css = fs.readFileSync("public/404.css");
var style5_css = fs.readFileSync("public/style5.css");
var style6_css = fs.readFileSync("public/style6.css");
var style7_css = fs.readFileSync("public/style7.css");
var match_js = fs.readFileSync("public/match.js");
var shapes_js = fs.readFileSync("public/shapes.js");
var uuddlrlrba_js = fs.readFileSync("public/uuddlrlrba.js");


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

  else if (req.url === "/match.html") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(match_html);
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

  else if (req.url === "/uuddlrlrba.html") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(finish_html);
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

  else if(req.url === "/404.css") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/css");
    res.write(error_css);
    res.end();
  }

  else if(req.url === "/style5.css") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/css");
    res.write(style5_css);
    res.end();
  }

  else if(req.url === "/style6.css") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/css");
    res.write(style6_css);
    res.end();
  }

  else if(req.url === "/style7.css") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/css");
    res.write(style7_css);
    res.end();
  }

  else if (req.url === "/match.js") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/javascript");
    res.write(match_js);
    res.end();
  }

  else if (req.url === "/shapes.js") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/javascript");
    res.write(shapes_js);
    res.end();
  }

  else if (req.url === "/uuddlrlrba.js") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/javascript");
    res.write(uuddlrlrba_js);
    res.end();
  }

  else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.write(error)
    res.end();
  }


}
