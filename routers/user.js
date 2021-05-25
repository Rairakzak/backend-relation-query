const e = require("express");
const { Router } = require("express");
const router = new Router();
const { user, todolist, todoitem, tag, itemtag } = require("../models");

const loggingMiddleware = (req, res, next) => {
  console.log("i got a req", req.method, req.headers, new Date());
  next();
};

const failRandom = (req, res, next) => {
  const fail = Math.random() * 10;
  if (fail > 5) {
    res.status(404).send("Not authorized to see this ");
  } else {
    next();
  }
};

router.get("/", loggingMiddleware, failRandom, async (req, res, next) => {
  try {
    console.log("i got a request for the userList");
    const allUsers = await user.findAll({ include: [todolist] });
    res.send(allUsers);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
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

router.post("/", async (request, res, next) => {
  try {
    console.log("body", request.body);
    const { email, name, phone } = request.body;
    const newUser = await user.create({ name, phone, email });
    res.send(newUser);
  } catch (e) {
    next(e);
  }
});

router.patch("/:id", async (req, res, next) => {
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

router.delete("/:id", async (req, res, next) => {
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

module.exports = router;
