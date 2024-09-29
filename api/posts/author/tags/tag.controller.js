const Tag = require("../../../../models/Tag");

const createTag = async (req, res, next) => {
  try {
    const newTag = await Tag.create(req.body);
    return res.status(200).json(newTag);
  } catch (error) {
    next(error);
  }
};
const getAlltags = async (req, res, next) => {
  try {
    const Tags = await Tag.find().populate("posts");
    return res.status(200).json(Tags);
  } catch (error) {
    next(error);
  }
};

module.exports = { createTag, getAlltags };
