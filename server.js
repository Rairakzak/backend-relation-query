const express = require("express");
const userRouter = require("./routers/user");
const todolistRouter = require("./routers/todolist");
const todoitemRouter = require("./routers/todoitem");
const PORT = process.env.PORT || 4000;
const app = express();

const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/todolists", todolistRouter); 
app.use("/todoitems", todoitemRouter);

app.listen(PORT, () => console.log("Server is running on ", PORT));
