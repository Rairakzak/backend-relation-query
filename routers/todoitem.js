const { Router } = require("express");
const { user, todolist, todoitem, tag, itemtag } = require("../models");
const router = new Router();
router.get("/", async (req, res) => {
  try {
    console.log("i got a request for the userList");
    const allUsers = await todoitem.findAll({ include: [tag] });
    res.send(allUsers);
  } catch (e) {
    console.log(e.message);
  }
});
module.exports = router;
