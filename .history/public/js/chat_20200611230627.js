const socket = io();

socket.on("welcomeMessage",(message)=>{
    console.log("welcome"1),
})


// socket.on('countUpdated',(count)=>{
//     console.log('The count has been updated!',count);
// })

// document.querySelector('#increment').addEventListener('click',()=>{
//     console.log('Clicked')
//     socket.emit('increment')
// })