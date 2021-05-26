/*
Copyright (c) 2021 Salty LLC. All rights reserved.
Any unauthorized used are prohibited.
*/
//Function Set / Variable

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
function response(type){
    if (type == "nsfw"){

    }
}

document.querySelector("#cookiebutton").onclick = function(){cagree();}
document.querySelector("#searchbutton").onclick = function(){var searchquery = document.getElementById("searchquery").value;
if (searchquery == "fuck"){response("nsfw")};var searchURL = "search?query=" + searchquery;window.location.href = searchURL};
document.querySelector("#loginb").onclick = function(){window.location.href = "login";};
function newuserlink(){
    window.location.href = "/login"
}
var cookieagree = cget("cookieagree");if (cookieagree != "true"){onLoad();}

console.log("%c %c %c %cSalty Fish API.main %c %c %c","background-color:#ebebeb","background-color:#bfbfbf","background-color:#969696","background-color:#969696;color:#ebebeb","background-color:#bfbfbf","background-color:#ebebeb","background-color:#ebebeb")

//some from https://www.w3schools.com/js/js_cookies.asp thanks a lot