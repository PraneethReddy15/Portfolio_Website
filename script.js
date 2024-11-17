var tablinks = document.getElementsByClassName("tab-links");
var tabcontent = document.getElementsByClassName("tab-content");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for (tabcontents of tabcontent) {
        tabcontents.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// -------------
var sidemenu=document.getElementById("sidemenu");
function openmenu()
{
    sidemenu.style.right="0";
}
function closemenu()
{
    sidemenu.style.right="-200px";

}
// -------------- contact------------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbwP1zv15mAuQm2AgTAyrbysDXs7Dr8mH7z1jTFfzA8KkHunLO1rkIK5DAxhL06YFTeA1Q/exec'
const form = document.forms['submit-to-google-sheet']
const submitmsg=document.getElementById("submit-msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        submitmsg.innerHTML="Message sent successfully!!";
        setTimeout(function()
        {
            submitmsg.innerHTML='';
        },4000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})
// ------------------------
var icon =document.getElementById("icon");
icon.onclick=function()
{
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme"))
    {
        icon.src="./files/sun.png"
    }
    else{
        icon.src="./files/moon.png"

    }
}
// ----------------------

var tablinks = document.getElementsByClassName("tab-links");
var tabcontent = document.getElementsByClassName("tab-content");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for (tabcontents of tabcontent) {
        tabcontents.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// -------------
var sidemenu=document.getElementById("sidemenu");
function openmenu()
{
    sidemenu.style.right="0";
}
function closemenu()
{
    sidemenu.style.right="-200px";

}
