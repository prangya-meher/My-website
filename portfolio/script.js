let openMenu=document.querySelector(".open-menu");
let closeMenu=document.querySelector(".close-menu");
let sidebar=document.querySelector(".sidebar");
let hiddenNav=document.querySelectorAll("a");


let contactBtn=document.querySelector(".contact-button");
let cvBtn=document.querySelector(".cv-button");

cvBtn.addEventListener("click", () => {
    window.location.href = "file:///C:/Users/HP/OneDrive/Pictures/Saved%20Pictures/PRANGYA/Prangyanjali_Meher_Resume1.pdf";
});
 

let git=document.querySelector(".git-i");
let link=document.querySelector(".linked");

git.addEventListener("click", () => {
    window.location.href = "https://github.com/prangya-meher";
});
link.addEventListener("click", () => {
    window.location.href = "https://www.linkedin.com/in/prangyanjali-meher-aa6b56316/";
});
//  <----------menubar--------->
openMenu.addEventListener("click", ()=>{
    sidebar.style.display="flex";
})
closeMenu.addEventListener("click", ()=>{
    sidebar.style.display="none";
})


// <-----------dark and light mode---------->
let darkMode=document.querySelector(".dark");
let lightMode=document.querySelector(".light");
let currMode=darkMode;
let head=document.querySelectorAll(".head");
let desc=document.querySelectorAll(".desc");
let aboutSec=document.querySelector(".about-sec");
let iconBox=document.querySelectorAll(".icon-box");
let iconGit=document.querySelector(".icon-git");
let iconDesc=document.querySelectorAll(".icon-desc");
let projectDesc=document.querySelectorAll(".project-desc");
let gitButton=document.querySelectorAll(".git-button");
let projectAll=document.querySelectorAll(".project-all");
let mail=document.querySelector(".mail");
let linkInfo=document.querySelector(".link-info")
let footItem=document.querySelector(".foot-item");
let copyRight=document.querySelector(".copyright");
let gitLight=document.querySelector(".git-light");
let gitDark=document.querySelector(".git-black");



let linkedinInfo=document.querySelector(".linkedin-info");
linkedinInfo.addEventListener("click", () => {
    window.location.href = "https://www.linkedin.com/in/prangyanjali-meher-aa6b56316/";
});


darkMode.addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
    darkMode.style.display = "none";
    lightMode.style.display = "block";
    lightMode.style.color = "black";
    head.forEach((e)=>{
        e.style.color="rgb(43, 20, 43)";
    });
    desc.forEach((e)=>{
        e.style.color="rgb(83, 81, 81)";
    });
    cvBtn.style.backgroundColor="rgb(42, 22, 42) ";
    cvBtn.style.color="white";
    contactBtn.style.backgroundColor="whitesmoke ";
    contactBtn.style.color="black";

    aboutSec.style.backgroundColor="whitesmoke";
    iconBox.forEach((e)=>{
        e.style.backgroundColor="whitesmoke";
    });
    iconDesc.forEach((e)=>{
        e.style.color="black";
    })
    hiddenNav.forEach((e) => {
        e.style.color = "black";
    });
    projectDesc.forEach((e)=>{
        e.style.color="black";
    });
    projectAll.forEach((e)=>{
        e.style.backgroundColor="whitesmoke";
    });
    gitButton.forEach((e)=>{
     e.style.backgroundColor="black";
     e.style.color="white"
    });
    mail.style.color="black";
    linkInfo.style.color="black";
  copyRight.style.color="black";
  gitDark.style.display="block";
  gitLight.style.display="none";
    
    currMode = lightMode;
});



lightMode.addEventListener("click", () => {
    document.body.style.backgroundColor = "rgb(31, 20, 31)";
    lightMode.style.display = "none";
    darkMode.style.display = "block";
    head.forEach((e)=>{
        e.style.color="white";
    });

    cvBtn.style.backgroundColor="white ";
    cvBtn.style.color="black";
    contactBtn.style.backgroundColor="rgb(59, 27, 59) ";
    contactBtn.style.color="white";

    desc.forEach((e)=>{
            e.style.color="rgb(139, 122, 122)";
        });
    aboutSec.style.backgroundColor=" rgb(42, 22, 42)";
    iconBox.forEach((e)=>{
        e.style.backgroundColor=" rgb(42, 22, 42)";
    });
    iconDesc.forEach((e)=>{
        e.style.color="white";
    })
    hiddenNav.forEach((e)=>{
        e.style.color="white";
    })
    projectDesc.forEach((e)=>{
        e.style.color="white";
    });
    projectAll.forEach((e)=>{
        e.style.backgroundColor="rgb(42, 22, 42)";
    })
    gitButton.forEach((e)=>{
        e.style.backgroundColor="white";
        e.style.color="black";
       });
       mail.style.color="white";
    linkInfo.style.color="white";
    copyRight.style.color="white";
    gitDark.style.display="none";
  gitLight.style.display="block";
     
    currMode = darkMode;
});


gitButton[0].addEventListener("click", () => {
    window.location.href = "https://github.com/prangya-meher/StreamFlix";
});
gitButton[1].addEventListener("click", () => {
    window.location.href = "https://github.com/prangya-meher/Weather-App";
});
gitButton[2].addEventListener("click", () => {
    window.location.href = "https://github.com/prangya-meher/calculator";
});
gitButton[3].addEventListener("click", () => {
    window.location.href = "https://github.com/prangya-meher/GameHub";
});

