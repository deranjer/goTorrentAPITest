let connectionAddress = "" //get the connection address from your your goTorrent client config

ClientAuthString = "" //Client auth string for automatic connection

var authMessage = {
		MessageType: "authRequest",
		Payload: {"ClientAuthString": ClientAuthString}
}

ws = new WebSocket(connectionAddress)

ws.onopen = function(){
    console.log("Open!")
    document.getElementById("IsConnectedText").innerHTML = "Connected!"
    document.getElementById("ServerAddressTextDisplay").innerHTML = connectionAddress
    //ws.send(JSON.stringify(authMessage)); //If you want to automatically authenticate on open, just uncomment this
	console.log("Sending authentication message...", JSON.stringify(authMessage))
}

ws.onclose = function() {
    console.log("Closed")
         document.getElementById("IsConnectedText").innerHTML = "Closed!"
}

ws.onmessage = function(evt) {
    serverResponse = document.getElementById("serverResponse").value
    var serverMessage = JSON.parse(evt.data)
    console.log("Message", serverMessage)
    serverResponse = serverResponse + JSON.stringify(serverMessage, undefined, 4)
    document.getElementById("serverResponse").value = serverResponse
}

document.getElementById('sendButton').addEventListener("click", function(){
    messageType = document.getElementById("messageType").value
    payload = document.getElementById("payloadInput").value 
    if (payload == "" || payload == null){
        var message = {
            MessageType: messageType,
        }
    } else {
        var message = {
            MessageType: messageType,
            Payload: JSON.parse(payload)
        }
    }  
    console.log("Request", JSON.stringify(message))
    ws.send(JSON.stringify(message))
    document.getElementById("payloadInput").value = ""
    messageType = document.getElementById("messageType").value = ""
});
