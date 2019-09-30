

// alert(1);

//make connection 
var socket = io.connect('http://localhost:4000');


//Query DOM
var handle = document.getElementById("handle");
    message = document.getElementById("message"),
    btn = document.getElementById("send"),
    output = document.getElementById("output"),
    feedback = document.getElementById("feedback");


//Emits Events


btn.addEventListener("click", function(){
    socket.emit('chat', {
        message: message.value,
        handle: handle.value    
    });
});

message.addEventListener('keypress',function(){
    socket.emit('typing', handle.value );
});



//Listen for events:
socket.on('chat', function(data){
    output.innerHTML += '<p><strong> ' + data.handle + ':</strong>' + data.message + '</p>';
});

socket.on('typing', function(data){
    feedback.innerHTML = '<p>'+ data +': is typing a message..</p>';
})