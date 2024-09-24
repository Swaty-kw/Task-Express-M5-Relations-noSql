const { Schema, model } = require("mongoose");
const Post = require("./Post");
const AuthorSchema = new Schema({
  name: { type: String },
  Posts: [{ type: Schema.Types.ObjectId, ref: "Post" }], // array becuase author has mulitple posts
});

const Author = model("Author,AuthorSchema");

module.exports = Author;
