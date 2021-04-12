/*
Copyright (c) 2021 Salty LLC. All rights reserved.
Any unauthorized used are prohibited.
*/
//Function Set / Variable

var cookieAgreeButton = document.getElementById("cookiebutton")
var searchButton = document.getElementById("searchbutton")
var loginButton = document.getElementById("loginb")
cookieAgreeButton.onclick = function(){
    cagree()
}
searchButton.onclick = function(){
    var searchquery = document.getElementById("searchquery").value;
    var searchURL = "/search?query=" + searchquery
    window.location.href = searchURL
}
loginButton.onclick = function(){
    window.location.href = "/login"
}
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
//some from https://www.w3schools.com/js/js_cookies.asp thanks a lot