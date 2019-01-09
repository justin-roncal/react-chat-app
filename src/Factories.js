const uuidv4 = require("uuid/v4");

const createUser = ({ name = "" } = {}) => ({
  id: uuidv4(),
  name
});

const createMessage = ({ message = "", sender = "" } = {}) => ({
  id: uuidv4(),
  time: new getTime(Date.now()),
  message,
  sender
});

const createChat = ({
  messages = [],
  name = "Community",
  users = []
} = {}) => ({
  id: uuidv4(),
  name,
  messages,
  users,
  typingUsers: []
});

const getTime = date => {
  return `${date.getHours()}:${date.getMinutes().slice(-2)}`;
};

module.exports = {
  createChat,
  createMessage,
  createUser
};
