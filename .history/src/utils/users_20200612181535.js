const users = [];

//addUser , removeUser, getUser, getUsersInRoom

const addUser = ({id, username, room }) =>{
    //Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    if(!username||!room){
        return {
            error: 'Username and room '
        }

    }

}

module.exports = {users}