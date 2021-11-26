var client = null;

function showMessage(newMessage, user) {
    var response = document.getElementById('response');
    var newResponse = document.createElement('h5');
    var date = document.createElement('p');
    var userElement = document.createElement('p');

    //set date
    var now= new Date();
    now = now.getDate()+"-"+ now.getMonth()+"-"+now.getFullYear()+", "+ now.getHours()+":"
        + now.getMinutes()+":"+now.getSeconds()+":";
     date.appendChild(document.createTextNode(now));
     date.classList.add('date');

     //set user
    userElement.classList.add('user');
    userElement.appendChild(document.createTextNode(user))

    newResponse.classList.add('list-group-item')
    newResponse.appendChild(document.createTextNode(newMessage));

    response.appendChild(userElement);
    userElement.appendChild(date)
    userElement.appendChild(newResponse);
    //go to down of site
    window.scrollTo(0,document.body.scrollHeight);

}
function  connect(){
    client = Stomp.client('ws://localhost:8080/chat');
    client.connect({}, function (frame){
     client.subscribe("/topic/messages", function frame(message){
         showMessage(JSON.parse(message.body).value, JSON.parse(message.body).user)
     })
 })
}

function sendMessage() {
    var messageToSend = document.getElementById('messageToSend').value;
    var user = document.getElementById('user').value;
    client.send("/app/chat", {}, JSON.stringify({'value': messageToSend, 'user': user} ));
    clearMtS();


}
function clearMtS(){
    document.getElementById('messageToSend').value = "";
}

var input = document.getElementById("messageToSend");

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        sendMessage();
    }
});