import { users } from "../data/users.js";

export const userController = (req, res) => {
  res.send(users);
};
