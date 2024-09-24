const Post = require("../../models/Post");

exports.fetchPost = async (postId, next) => {
  try {
    const post = await Post.findById(postId);
    return post;
  } catch (error) {
    next(error);
  }
};

exports.postsCreate = async (req, res) => {
  try {
    const { authorId } = req.params; // introduce the author id
    const postData = { ...req.body, author: authorId }; // here we added the spreader from the post model with the author Id
    const newPost = await Post.create(postData); //we changed the req.body to postData from above
    const author = await Author.findByIdAndUpdate(authorId, {
      $push: { Posts: newPost._id },
    });
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

exports.postsDelete = async (req, res) => {
  try {
    await Post.findByIdAndRemove({ _id: req.post.id });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.postsUpdate = async (req, res) => {
  try {
    await Post.findByIdAndUpdate(req.post.id, req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.postsGet = async (req, res, next) => {
  try {
    // here we added populate to display the authors list of posts and name from the authors model
    const posts = await Post.find({}, "-createdAt -updatedAt").populate(
      "Posts",
      "name"
    );

    res.json(posts);
  } catch (error) {
    next(error);
  }
};
