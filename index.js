import express from "express";
const app = express();
import userRoute from "./routes/users.routes.js";
import blogRoute from "./routes/blogs.routes.js";

app.use("/users", userRoute);
app.use("/blogs", blogRoute);

app.listen(3000, () => console.log("Server is running on port 3000"));
