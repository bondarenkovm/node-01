const {
  listContacts,
  getContactById,
  addContact,
  updateContactById,
  removeContact,
} = require("./contacts");

// const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      return console.log(allContacts);
    //   break;

    case "get":
      const oneContact = await getContactById(id);
      return console.log(oneContact);
    //   break;

    case "add":
      const newContact = await addContact({ name, email, phone });
      return console.log(newContact);
    //   break;

    case "update":
      const updateContact = await updateContactById(id, { name, email, phone });
      return console.log(updateContact);
    //   break;

    case "remove":
      const removeContactId = await removeContact(id);
      return console.log(removeContactId);
    //   break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "qdggE76Jtbfd9eWJHrssH" });
// invokeAction({
//   action: "add",
//   name: "Stephan Bodzin",
//   email: "stephan_bodzin@gmail.com",
//   phone: "(987) 381-2578",
// });
// invokeAction({
//   action: "update",
//   id: "9DOq0IXq95",
//   name: "Stephan Bodzin",
//   email: "stephan_bodzin@gmail.com",
//   phone: "(987) 457-7890",
// });
invokeAction({ action: "remove", id: "9DOq0IXq95" });

// invokeAction(argv);
