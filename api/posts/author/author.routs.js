// imports
const exprees = require("express");
const { getAllauthors, createAuthor } = require("./author.controller");
const authorRouter = exprees.Router;
// Routs
authorRouter.get("./", getAllauthors);
authorRouter.Post("./", createAuthor);

// exports
module.exports = authorRouter;
