const socket = io();

// elements
const $messageForm = document.querySelector('#message-form')
const $messageFormInput = $messageForm.querySelector('input')
const $messageFormButton = $messageForm.querySelector('button')
const $sendButtonLocation = document.querySelector('#send-location')
const $messages = document.querySelector('#messages')

//Templates
const messageTemplate = document.querySelector('#message-template').innerHTML

socket.on('message',(message)=>{
    console.log(message);
    const html = Mustache.render(messageTemplate)
    $messages.insertAdjacentHTML('beforee')
})

$messageForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    $messageFormButton.setAttribute('disabled','disabled')

    const message = e.target.elements.message.value;
    socket.emit('sendMessage',message,(error)=>{
        $messageFormButton.removeAttribute('disabled')
        $messageFormInput.value = ''
        $messageFormInput.focus()

        if(error){
            return console.log(error);
        }
        console.log('Message was delivered');
    });


})

$sendButtonLocation.addEventListener('click',(e)=>{
    
    if(!navigator.geolocation){
        return alert('Geolocation is not supported by your browser.')
    }
    $sendButtonLocation.setAttribute('disabled','disabled')

    navigator.geolocation.getCurrentPosition((position)=>{
        socket.emit('sendLocation',{
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        },(error)=>{
            if(error){
                return console.log(error);
            }
            $sendButtonLocation.removeAttribute('disabled')
            console.log('geolocation was delivered')
        })
    });

    
})
