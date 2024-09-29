const express = require("express");
const tagRouter = express.Router();
const { createTag, getAlltags } = require("./tag.Controller");

// routers
tagRouter.post("/", createTag);
tagRouter.get("/", getAlltags);

module.exports = tagRouter;
