const users = []

const addUser = ({id,username,room})=>{
    //clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //validate the data
    if(!username || !room){
        return {
            error: 'Username and room are required!!'
        }
    }

    //check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    //validate username
    if(existingUser){
        return {
            error: 'User is in use!'
        }
    }

    //Store user
    const user = {id,username,room}
    users.push(user)
    return {user}
}

//removing the user
const removeUser = (id) =>{
    const index = users.findIndex((user)=> user.id === id)
    if(index !== -1){
        return users.splice(index,1)[0]
    }
}

const getUser = (id) =>{
    return users.find((user)=> user.id === id)
}

const getUsersInRoom = (room) =>{
    room = room.trim().toLowerCase()
    return users.filter((user) =>user.room === room)
}

// addUser({
//     id:22,
//     username:'Snehal',
//     room: ' Oak'
// })

// addUser({
//     id:23,
//     username:'Hrishi',
//     room: ' Oak'
// })

// addUser({
//     id:20,
//     username:'Sharvary',
//     room: 'Training'
// })

// const user = getUser(22)
// console.log(user)

// const userList = getUsersInRoom('Oak')
// console.log(userList)

// console.log(users)

// const removedUser = removeUser(22)
// console.log(removedUser)
// console.log(users)

module.exports ={
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}