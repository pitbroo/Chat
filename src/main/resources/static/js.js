var client = null;

function showMessage(newMessage) {
    var response = document.getElementById('response');
    var newResponse = document.createElement('p');
    newResponse.classList.add('list-group-item')
    newResponse.appendChild(document.createTextNode(newMessage));
    response.appendChild(newResponse)

}
function  connect(){
    client = Stomp.client('ws://localhost:8080/chat');
    client.connect({}, function (frame){
     client.subscribe("/topic/messages", function frame(message){
         showMessage(JSON.parse(message.body).value)
     })
 })
}

function sendMessage() {
    var messageToSend = document.getElementById('messageToSend').value;
    client.send("/app/chat", {}, JSON.stringify({'value': messageToSend}));

}
