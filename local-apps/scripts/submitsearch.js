// GET salty.data! TO BUTTON ("Salt!")

function getDataToNewPageSearch(){
    var searchquery = document.getElementById("searchquery").value;
    var searchURL = "/search?query=" + searchquery
    window.location.href = searchURL
}