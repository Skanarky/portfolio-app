var allContents = ["<div><h3 onclick='changeContent()'>ilian kutkurov</h3><ul class='viewContent more row'><li><div class='pic html' ></div></li><li><div class='pic css' ></div></li><li><div class='pic js' ></div></li><li><div class='pic node' ></div></li><li><div class='pic react' ></div></li><li><div class='pic mongo' ></div></li></ul></div>",
    "<div><h3 onclick='changeContent()'>GitHub</h3><a class='fa fa-github viewContent' href='https://github.com/Skanarky' target=blank></a></div></div>",
    "<div><h3 onclick='changeContent()'>projects</h3><ul class='viewContent more'><li><a href='https://set-kutkurov-ellis-thomas.herokuapp.com/' target=blank>Set-for-Set</a></li><li><a href='https://viewfinder-kutkurov.herokuapp.com/' target=blank>Viewfinder</a></li><li><a href='https://rock-the-vote-kutkurov.herokuapp.com/' target=blank>Rock the Vote</a></li><li><a href='https://learn-today-kutkurov.herokuapp.com/' target=blank>Learn Today</a></li></ul></div>",
    "<div><h3 onclick='changeContent()'>LinkedIn</h3><a class='fa fa-linkedin viewContent' href='https://www.linkedin.com/in/ilian-kutkurov-1b1a9860/' target=blank></a></div>",
    "<div><h3 onclick='changeContent()'>twitter</h3><a class='fa fa-twitter viewContent' href='https://twitter.com/IlianKutkurov' target=blank></a></div>",
    "<div><h3 onclick='changeContent()'>resume</h3><a class='fa fa-file viewContent' href='https://drive.google.com/file/d/18UmDWMRu08LA0uIWDMkxNNTTRpBwPaUp/view?usp=sharing' target=blank></a></div>",
    "<div><h3 onclick='changeContent()'>contact</h3><div class='viewContent contact'><a class='fa fa-envelope' href='mailto:kutkurov@gmail.com' target=blank></a><h5>+1 801 706 9444</h5></div></div>"
];

var contentIndex = 0;

window.onload = function () {
    document.getElementById("render").innerHTML = allContents[0];
};

function changeContent() {
    if (contentIndex === 0 || contentIndex < 6) {
        contentIndex++;
        return document.getElementById("render").innerHTML = allContents[contentIndex];
    }
    contentIndex = 0;
    return document.getElementById("render").innerHTML = allContents[contentIndex];
};