//GET! SaltyFish.chatbot/index.html

var sendbtn = document.getElementById("sendButton");

// functions for the button pressing event
function textSend(){
    var textarea = document.getElementById("chatinput");
    // alert(textarea);
    textarea.value = ""
}