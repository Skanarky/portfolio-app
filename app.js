var allContents = ["<div class='hello'><h2 class='ilian' title='Welcome' onclick='changeContent()'>ilian kutkurov</h2><p class='developer'>software developer</p></div>",
    "<div class='one'><div class='navigation'><div onclick='setContent(1)' title='Technologies' class='colorTech selected'>T</div><div onclick='setContent(2)' title='Projects' class='colorProjects'>P</div><div onclick='setContent(3)' title='GitHub' class='colorGitHub'>G</div><div onclick='setContent(4)' title='LinkedIn' class='colorLinkedIn'>L</div><div onclick='setContent(5)' title='Resume' class='colorResume'>R</div><div onclick='setContent(6)' title='Contact' class='colorContact'>C</div></div><h3 class='technologies' onclick='changeContent()' title='Technologies; Go to Next Page'>technologies</h3><ul onclick='changeContent()' class='viewContent more row'><li><div class='pic node' ></div></li><li><div class='pic react' ></div></li><li><div class='pic mongo' ></div></li><li><div class='pic js' ></div></li><li><div class='pic css' ></div></li><li><div class='pic html' ></div></li></ul></div>",
    "<div class='two'><div class='navigation'><div onclick='setContent(1)' title='Technologies' class='colorTech'>T</div><div onclick='setContent(2)' title='Projects' class='colorProjects selected'>P</div><div onclick='setContent(3)' title='GitHub' class='colorGitHub'>G</div><div onclick='setContent(4)' title='LinkedIn' class='colorLinkedIn'>L</div><div onclick='setContent(5)' title='Resume' class='colorResume'>R</div><div onclick='setContent(6)' title='Contact' class='colorContact'>C</div></div><h3 class='projects' onclick='changeContent()' title='Projects; Go to Next Page'>projects</h3><ul class='viewContent more'><li><a href='https://set-kutkurov-ellis-thomas.herokuapp.com/' target=blank data-descr='Full stack project with user authentication. Rendition of the ​card game Set.'>Set-for-Set</a></li><li><a href='https://viewfinder-kutkurov.herokuapp.com/' target=blank data-descr='Full stack application providing an all-in-one-platform for learning photography, including lessons, exercises, examples, etc.'>Viewfinder</a></li><li><a href='https://learn-today-kutkurov.herokuapp.com/' target=blank data-descr='Front end single page application. Search engine for learning resources via the Udemy, YouTube & Coursera APIs'.>Learn Today</a></li></ul></div>",
    "<div class='three'><div class='navigation'><div onclick='setContent(1)' title='Technologies' class='colorTech'>T</div><div onclick='setContent(2)' title='Projects' class='colorProjects'>P</div><div onclick='setContent(3)' title='GitHub' class='colorGitHub selected'>G</div><div onclick='setContent(4)' title='LinkedIn' class='colorLinkedIn'>L</div><div onclick='setContent(5)' title='Resume' class='colorResume'>R</div><div onclick='setContent(6)' title='Contact' class='colorContact'>C</div></div><h3 class='gitHub' onclick='changeContent()' title='GitHub; Go to Next Page'>GitHub</h3><a class='fa viewContent hoverGit' href='https://github.com/Skanarky' target=blank><h6>View Profile</h6></a></div></div>",
    "<div class='four'><div class='navigation'><div onclick='setContent(1)' title='Technologies' class='colorTech'>T</div><div onclick='setContent(2)' title='Projects' class='colorProjects'>P</div><div onclick='setContent(3)' title='GitHub' class='colorGitHub'>G</div><div onclick='setContent(4)' title='LinkedIn' class='colorLinkedIn selected'>L</div><div onclick='setContent(5)' title='Resume' class='colorResume'>R</div><div onclick='setContent(6)' title='Contact' class='colorContact'>C</div></div><h3 class='linkedIn' onclick='changeContent()' title='LinkedIn; Go to Next Page'>LinkedIn</h3><a class='fa viewContent hoverLinked' href='https://www.linkedin.com/in/ilian-kutkurov-1b1a9860/' target=blank><h6>View Profile</h6></a></div>",
    "<div class='six'><div class='navigation'><div onclick='setContent(1)' title='Technologies' class='colorTech'>T</div><div onclick='setContent(2)' title='Projects' class='colorProjects'>P</div><div onclick='setContent(3)' title='GitHub' class='colorGitHub'>G</div><div onclick='setContent(4)' title='LinkedIn' class='colorLinkedIn'>L</div><div onclick='setContent(5)' title='Resume' class='colorResume selected'>R</div><div onclick='setContent(6)' title='Contact' class='colorContact'>C</div></div><h3 class='resume' onclick='changeContent()' title='Resume; Go to Next Page'>resume</h3><a class='fa viewContent hoverResume' href='https://drive.google.com/file/d/1Ah05cjkO3h37DH2KA1rynxrcSvnzragr/view?usp=sharing' target=blank><h6>View Resume</h6></a></div>",
    "<div class='seven'><div class='navigation'><div onclick='setContent(1)' title='Technologies' class='colorTech'>T</div><div onclick='setContent(2)' title='Projects' class='colorProjects'>P</div><div onclick='setContent(3)' title='GitHub' class='colorGitHub'>G</div><div onclick='setContent(4)' title='LinkedIn' class='colorLinkedIn'>L</div><div onclick='setContent(5)' title='Resume' class='colorResume'>R</div><div onclick='setContent(6)' title='Contact' class='colorContact selected'>C</div></div><h3 class='contact' onclick='changeContent()' title='Contact; Go to Next Page'>contact</h3><div class='viewContent phone'><a class='fa envelope' href='mailto:kutkurov@gmail.com' target=blank><h6>kutkurov@gmail.com</h6></a></div></div>"
];

// Rock the Vote -> no
//<li><a href='https://rock-the-vote-kutkurov.herokuapp.com/' target=blank title='Fun full stack app; forum for creating debates on interesting social topics; users can vote on comments & respond'>Rock the Vote</a></li>

var contentIndex = 0;

window.onload = function () {
    document.getElementById("render").innerHTML = allContents[0];
};

function changeContent() {
    if (contentIndex === 0 || contentIndex < 7) {
        contentIndex++;
        return document.getElementById("render").innerHTML = allContents[contentIndex];
    }
    contentIndex = 1;
    return document.getElementById("render").innerHTML = allContents[contentIndex];
};

setTimeout(() => {
    if (contentIndex === 0) {
        return document.getElementById("render").innerHTML = allContents[1];
    } else {
        return;
    }
}, 5500);

function setContent(inputIndex) {
    contentIndex = inputIndex;
    return document.getElementById("render").innerHTML = allContents[inputIndex];
};