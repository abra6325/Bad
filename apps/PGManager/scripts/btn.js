var confirmBTN = document.querySelector("#confirmMainText");

function newuuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
    });
}
  confirmBTN.onclick = function(){
    gPass = confirmInput.value
    if (gPass == "_2wi5bsdbl"){
        cset("loginPGManager",gPass)
        query = "?session-uuid="+newuuid()
        window.location.href = "app"+query
    }
}

