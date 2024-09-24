const { model, Schema } = require("mongoose");

const PostSchema = new Schema({
  title: String,
  body: String,
  author: { type: Schema.Types.ObjectId, ref: "Author" }, // the relationship between author and posts (one to many)
});

module.exports = model("Post", PostSchema);
