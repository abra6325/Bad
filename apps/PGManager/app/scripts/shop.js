var login = cget("loginPGManager")
if (login != "_2wi5bsdbl"){
    window.location.href = "/apps/PGManager"
}

document.getElementById("f2f3a736").onclick = function(){view(this.id);};
document.getElementById("da139b81").onclick = function(){view(this.id);};
document.getElementById("eb4cb2ef").onclick = function(){view(this.id);};
document.getElementById("e63fa325").onclick = function(){view(this.id);};


function view(id){
    var value = Math.floor(Math.random()*100)
    if (value == 50) {
        window.location.href = "/apps/PGManager/app/item?never_gonna_give_you_up=" + id
    }
    else {
        window.location.href = "/apps/PGManager/app/item?query=" + id
    }
}