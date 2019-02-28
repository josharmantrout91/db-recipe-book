const express = require("express");

const recipesRouter = require("./recipe-book/recipe-book-router.js");

const server = express();

server.use(express.json());
server.use("/api", recipesRouter);

module.exports = server;
