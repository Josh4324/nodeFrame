const http = require("http");
const fs = require("fs");
let url = require("url");

const server = http
  .createServer(function (req, res) {
    const reqUrl = url.parse(req.url, true);
    if (req.method === "GET" && reqUrl.pathname === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("Hello World, Welcome to WeJapa Internships");
    } else if (req.method === "POST") {
      req.body.name = "Josh";
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`Hello ${req.body.name}, Welcome to WeJapa Internships`);
    }
  })
  .listen(7000);
