// imports
const Author = require("../../../models/author");
const authorRouter = require("./author.routs");
// controllers
const getAllauthors = async (req, res, next) => {
  try {
    const authors = await Author.find();
    return response.status(200).json({ authors });
  } catch (error) {
    next(error);
  }
  const createAuthor = async (request, response, next) => {
    try {
      const newAuthor = await Author.create();
      return response.status(201).json({ newAuthor });
    } catch (error) {
      next(error);
    }
  };
};
// exports
module.exports = { getAllauthors,  };
