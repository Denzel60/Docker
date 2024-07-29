import { blogs } from "../data/blogs.js";

export const blogsController = (req, res) => {
  res.send(blogs);
};
