//GET! SaltyFish.chatbot/index.html

var sendbtn = document.getElementById("sendButton");
var messages = ""

// functions for the button pressing event
function textSend(){
    var textarea = document.getElementById("chatinput");
    var history = document.getElementById("history")
    // alert(textarea);
    if (textarea.value != ""){
        messages += textarea.value + "<br>"
        history.innerHTML = messages
        textarea.value = ""
    }
}