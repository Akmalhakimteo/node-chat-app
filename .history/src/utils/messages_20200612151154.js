const generateMessage = (text) => {
    return {
        text,
        createdAt: new Date().getTime()
    }
}
const generateLocationMessage = ()


module.exports = {
    generateMessage
}