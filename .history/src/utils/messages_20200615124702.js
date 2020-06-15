const generateMessage = (text) => {
  return {
    text,
    createdAt: new Date().getTime(),
  };
};
const generateLocationMessage = (username,url) => {
  return {
    url,
    createdAt: new Date().getTime(),
  };
};

module.exports = {
  generateMessage,
  generateLocationMessage,
};
