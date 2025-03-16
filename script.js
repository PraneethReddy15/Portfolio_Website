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
//skills----------------------
const icons = [
    'android.png', 'bootstrap.png', 'C.png', 'css.png', 'Docker.png',
    'git.png', 'github.png', 'html.png', 'java.png', 'js.png',
    'linux.png', 'My-SQL.png', 'node-js.png', 'python.png', 'react.png',
    'ruby.png', 'ubuntu.png', 'blockchain.png'
];

const container = document.getElementById('circle');
const radius = 160;  

icons.forEach((icon, index) => {
    const angle = (index / icons.length) * (2 * Math.PI); 
    const x = radius * Math.cos(angle) + 175;
    const y = radius * Math.sin(angle) + 175;

    const img = document.createElement('img');
    img.src = `icons/${icon}`;
    img.className = 'icon';
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    img.addEventListener('click', (e) => {
        const skillName = icon.replace('.png', '');
        const skillText = document.createElement('div');
        skillText.innerText = skillName;
        skillText.style.position = 'absolute';
        skillText.style.left = `${e.clientX}px`;
        skillText.style.top = `${e.clientY + 20}px`;
        skillText.style.color = '#fff';
        skillText.style.fontSize = '18px';
        skillText.style.backgroundColor = '#222';
        skillText.style.padding = '5px 10px';
        skillText.style.borderRadius = '8px';
        document.body.appendChild(skillText);

        setTimeout(() => skillText.remove(), 2000);
    });

    container.appendChild(img);
});