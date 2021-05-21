const { user, todoitem, todolist } = require("./models");

const ListsWithUsers = async () => {
  const lists = await todolist.findAll({
    include: todoitem,
  });
  return lists.map((list) => list.toJSON());
};
ListsWithUsers().then((lists) => console.log(lists));

const newUser = async ({ name, email, phone }) => {
  const newUser = await user.create({ name, email, phone });
  return newUser.get({ plain: true });
};
