const users = [];

//addUser , removeUser, getUser, getUsersInRoom

const addUser = ({id, username, room }) =>{
    //Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    if(!username||!room){
        return {
            error: 'Username and room are required'
        }

    }

    const existingUser = users.find((user)=>{
        return user.room === room && user.username === username
    })    

    if(existingUser){
        return {
            error: 'Username is in use!'
        }
    }

    const user = {id,username,room}
    users.push(user)
    return {
        user
    }
}

const removeUser = (id) => {
    const 
}

addUser({
    id: 22, username: 'Akmal', room:'Tampines'
})

console.log(addUser({
    id: 22, username: 'akmal', room:'tampines'
}))

console.log(users);