import path from "path";
import express from "express";
import bodyParser from "body-parser"
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import config from "../webpack.dev.config.js";
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const server = express()

const compiler = webpack(config)
server.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);
server.use(webpackHotMiddleware(compiler));

server.use(express.static(__dirname));
server.use(bodyParser.json({ limit: "5mb" }));

// server.get("/api/v1/test", (req, res) => {
//   console.log("success");
//   res.json({ message: "success" });
// });

server.get('*', (req, res, next) => {
  compiler.outputFileSystem.readFile(
    path.join(__dirname, "..", "index.html"),
    (err, result) => {
      if (err) {
        return next(err);
      }
      res.set("content-type", "text/html");
      res.send(result);
      res.end();
    }
  );
});

server.listen(PORT, () => {
  console.log(`Serving at http://localhost:${PORT}`);
});
