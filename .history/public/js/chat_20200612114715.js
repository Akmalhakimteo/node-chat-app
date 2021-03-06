const socket = io();

// elements
const $messageForm = document.querySelector('#message-form')
const 

socket.on('message',(message)=>{
    console.log(message);
})

$messageform.addEventListener('submit',(e)=>{
    e.preventDefault();

    const message = e.target.elements.message.value;
    socket.emit('sendMessage',message,(error)=>{
        if(error){
            return console.log(error);
        }
        console.log('Message was delivered');
    });
})

document.querySelector('#send-location').addEventListener('click',(e)=>{
    if(!navigator.geolocation){
        return alert('Geolocation is not supported by your browser.')

    }
    navigator.geolocation.getCurrentPosition((position)=>{
        socket.emit('sendLocation',{
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        },(error)=>{
            if(error){
                return console.log(error);
            }
            console.log('geolocation was delivered')
        })
    });
    
    
})
