const generateMessage = (username, text) => {   //pass the data to the generateMessage()
    return {
        username,
        text,
        createdAt: new Date().getTime()
    }
}

const generateLocationMessage = (username,url)=>{   //pass the data to the generateLocationMessage()
    return {
        username,
        url,
        createdAt: new Date().getTime()
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage
}