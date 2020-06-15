const generateMessage = (text) => {
    return {
        text,
        createdAt: new Date().getTime()
    }
}
const generateLocationMessage = (url) =>{
    return {
        url,
        createdAt: M
    }
}


module.exports = {
    generateMessage
}