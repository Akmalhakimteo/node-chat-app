const socket = io();

socket.on('message',(message)=>{
    console.log(message);
})

document.querySelector('#message-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    const message = e.target.elements.message.value;
    socket.emit('sendMessage',message);
})

document.querySelector('#send-location').addEventListener('click',(e)=>{
    if(<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>navigator.geolocation){

    }
    
})
