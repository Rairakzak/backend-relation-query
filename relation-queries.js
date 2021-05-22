const { user, todoitem, todolist, tag } = require("./models");

// const ListsWithUsers = async () => {
//   const lists = await todoitem.findAll({
//     include: [tag],
//   });
//   return lists.map((list) => list.toJSON());
// };
// ListsWithUsers().then((lists) => console.log(lists));

// const newUser = async ({ name, email, phone }) => {
//   const newUser = await user.create({ name, email, phone });
//   return newUser.get({ plain: true });
// };

async function itemsWithTags() {
  const items = await todoitem.findAll({ include: [tag] });
  return items.map((item) => item.get({ plain: true }));
}

itemsWithTags().then(items => console.log("items with tags", items));
