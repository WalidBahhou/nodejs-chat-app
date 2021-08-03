const moment = require('moment')

const generateMessage = (username, text) => {
    return {
        username,
        text,
        createdAt: moment(new Date().getTime()).format('HH:mm:ss')
    }
}

const generateLocationMessage = (username, url) => {
    return {
        username,
        url,
        createdAt: moment(new Date().getTime()).format('HH:mm:ss')
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage
}