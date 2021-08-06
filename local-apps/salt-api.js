/*
Copyright (c) 2021 Salty LLC. All rights reserved.
Any unauthorized used are prohibited.
*/
//Function Set / Variable
console.log("%c %c %c %cSalty Fish API.main %c %c %c","background-color:#ebebeb","background-color:#bfbfbf","background-color:#969696","background-color:#969696;color:#ebebeb","background-color:#bfbfbf","background-color:#ebebeb","background-color:#ebebeb")

var sq = document.getElementById("searchquery")
var cb = document.getElementById("cookiebutton")
var sb = document.getElementById("searchbutton")
var lb = document.getElementById("loginb")

function cset(name,value,expiredays){
    var date = new Date();
    date.setTime(date.getTime()+(expiredays*24*60*60*1000));
    var expires = "expires="+date.toUTCString();
    document.cookie=name+"="+value+";"+expiredays+";path=/";
}
function cget(cname){
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' '){
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
    }
    return "";
}
function onLoad(){
    var cookieagree = cget("cookieagree")
    if (cookieagree != "true"){
        cmessage()
        cset("firstuser",1,999999)
    }
}
function page(){
    var titleElement = document.getElementsByTagName("title")[0]
    titleElement.innerHTML = pageData["pagetype"] + " | " + pageData["title"] + " | Salty Fish"
}
function cmessage(){
    var popup = document.getElementById("cookiemsg");
    popup.classList.replace("idle","load");
}
function cagree(){
    var popup = document.getElementById("cookiemsg");
    popup.classList.replace("load","idle");
    cset("cookieagree",true,999999)
}

cb.onclick() = cagree();
sb.onclick() = function(){
    document.location.href = "/search?query=" + sq.value
}
lb.onclick() = function(){
    document.location.href = "/login"
}
//some from https://www.w3schools.com/js/js_cookies.asp thanks a lot