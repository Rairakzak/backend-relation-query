const express = require("express");
const { user, todolist, todoitem, tag, itemtag } = require("./models");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/users", async (req, res) => {
  try {
    console.log("i got a request for the userList");
    const allUsers = await user.findAll({ include: [todolist] });
    res.send(allUsers);
  } catch (e) {
    console.log(e.message);
  }
});

app.get("/users/:id", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.id);
    const User = await user.findByPk(userId);
    if (!User) {
      res.status(404).send("User not found");
    } else {
      res.send(User);
      console.log(User);
    }
  } catch (e) {
    next(e);
  }
});

app.post("/users", async (request, res, next) => {
  try {
    console.log("body", request.body);
    const { email, name, phone } = request.body;
    const newUser = await user.create({ name, phone, email });
    res.send(newUser);
  } catch (e) {
    next(e);
  }
});

app.patch("/users/:id", async (req, res, next) => {
  try {
    console.log(req.body);
    const id = req.params.id;
    const name = req.body.name;
    const newuser = await user.findByPk(id);
    console.log(user);
    await newuser.update({ name });
    res.send(newuser);
  } catch (e) {
    next(e);
  }
});

app.delete("/users/:id", async (req, res, next) => {
  try {
    console.log(req.body);
    const id = req.params.id;
    const newuser = await user.findByPk(id);
    console.log(user);
    await newuser.destroy();
    res.send(newuser);
  } catch (e) {
    next(e);
  }
});
//post / put / patch ..... has body

// app.get("/todolists", async (req, res) => {
//   try {
//     console.log("i got a request for the userList");
//     const allUsers = await todolist.findAll({ include: todoitem });
//     res.send(allUsers);
//   } catch (e) {
//     console.log(e.message);
//   }
// });
// app.get("/todoitems", async (req, res) => {
//   try {
//     console.log("i got a request for the userList");
//     const allUsers = await todoitem.findAll({ include: tag });
//     res.send(allUsers);
//   } catch (e) {
//     console.log(e.message);
//   }
// });

// app.get("/tags", async (req, res) => {
//   try {
//     console.log("i got a request for the userList");
//     const allUsers = await tag.findAll({ include: [itemtag] });
//     res.send(allUsers);
//   } catch (e) {
//     console.log(e.message);
//   }
// });
app.listen(PORT, () => console.log("Server is running on ", PORT));
