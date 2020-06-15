const generateMessage = (text) => {
  return {
    text,
    createdAt: new Date().getTime(),
  };
};
const generateLocationMessage = (user,url) => {
  return {
    url,
    createdAt: new Date().getTime(),
  };
};

module.exports = {
  generateMessage,
  generateLocationMessage,
};
