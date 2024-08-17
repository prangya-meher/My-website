// <------------------about------------------->
gsap.from("#about",{
    opacity:0,
    y:200,
    duration:1,
    scrollTrigger:{
        trigger:"#about",
        scroll:"body",
        start:"top 100%",
        end:"top 60%",
        scrub:2

    }
})

// <------------------skills--------------->
gsap.from("#skills .icon-box",{
    opacity:0,
    transform:"translateY(-100%)",
    duration:2,
    stagger:1,
    scrollTrigger:{
        trigger:"#skills .icon-box",
        start:"top 80%",
        end:"top 50%",
        scrub:2
    }
})

// <--------------------project----------------->

gsap.from("#project",{
    opacity:0,
    y:200,
    duration:3,
    scrollTrigger:{
        trigger:"#project",
        scroll:"body",
        start:"top 55%",
        end:"top 50%",
        scrub:2

    }
})


// <--------------contact-------------->
gsap.from("#contact",{
    opacity:0,
    y:200,
    duration:1,
    scrollTrigger:{
        trigger:"#contact",
        scroll:"body",
        start:"top 100%",
        end:"top 60%",
        scrub:2

    }
})

// <----------------footer------------------>
gsap.from("#footer",{
    opacity:0,
    y:200,
    duration:1,
    scrollTrigger:{
        trigger:"#footer",
        scroll:"body",
        start:"top 130%",
        end:"top 60%",
        scrub:2

    }
})


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
let liveDemo=document.querySelectorAll(".live-button");
let projectAll=document.querySelectorAll(".project-all");
let mail=document.querySelector(".mail");
let linkInfo=document.querySelector(".link-info")
let footItem=document.querySelector(".foot-item");
let copyRight=document.querySelector(".copyright");


// <---------git-button---------->
let gitLight=document.querySelector(".git-light");
let gitDark=document.querySelector(".git-black");

// <---------git-iocon----------->
let gitIDark=document.querySelector(".git-i-dark");
let gitILight=document.querySelector(".git-i-light");

// <----------------linked-button---------->
let linkedLight=document.querySelector(".linked-light");
let linkedDark=document.querySelector(".linked-dark");

// <----------------closemenu-------------->
let closeLight=document.querySelector(".close-light");
let closeDark=document.querySelector(".close-dark");

// <----------------openmenu--------------->
let openLight=document.querySelector(".open-light");
let openDark=document.querySelector(".open-dark");

// <--------------mail--------------->
let mailDark=document.querySelector(".mail-dark");
let mailLight=document.querySelector(".mail-light");




let linkedinInfo=document.querySelector(".linkedin-info");
linkedinInfo.addEventListener("click", () => {
    window.location.href = "https://www.linkedin.com/in/prangyanjali-meher-aa6b56316/";
});


function handleResize() {
    if (window.innerWidth <= 850) {
      if (currMode === darkMode) {
            openDark.style.display = 'block';
            openDark.addEventListener("click", ()=>{
              sidebar.style.display="flex";
                 })
            openLight.style.display = 'none';
        } 
        else {
            openDark.style.display = 'none';
            openLight.style.display = 'block';
        }
         
    } 
    else{
        openDark.style.display="none";
        openLight.style.display="none";
    }
}



// <---------------lightMode---------------->
darkMode.addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
    closeMenu.style.color="black";
    openMenu.style.color="black";
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
    mail.style.color="black";
    linkInfo.style.color="black";

  copyRight.style.color="black";


// <----------openmenu--------->
handleResize()

  // <---------closemenu---------->
  closeDark.style.display="block";
  closeLight.style.display="none";

  closeDark.addEventListener("click", ()=>{
     sidebar.style.display="none";
    });
// <---------git-button---------->
  gitDark.style.display="block";
  gitLight.style.display="none";

  // <---------git-icon---------->
  gitIDark.style.display="block";
  gitIDark.addEventListener("click", ()=>{
    window.location.href = "https://github.com/prangya-meher";
  })
  gitILight.style.display="none";
  
  // <---------linked-button---------->
  linkedDark.style.display="block";
  linkedDark.addEventListener("click", () => {
    window.location.href = "https://www.linkedin.com/in/prangyanjali-meher-aa6b56316/";
});
  linkedLight.style.display="none";

//   <-----------mail----------->
mailDark.style.display="block";
mailLight.style.display="none";


    
    currMode = lightMode;
});




// <--------darkMode---------->
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

       mail.style.color="white";
    linkInfo.style.color="white";
    copyRight.style.color="white";

    // <---------openmenu---------->
    handleResize()

   
    
    // <---------closemenu---------->
    closeDark.style.display="none";
  closeLight.style.display="block";

// <---------gitbutton---------->
    gitDark.style.display="none";
  gitLight.style.display="block";

  // <---------git-icon---------->
  gitIDark.style.display="none";
  gitILight.style.display="block";

  // <---------linked-button---------->
  linkedDark.style.display="none";
  linkedLight.style.display="block";

  //   <-----------mail----------->
mailDark.style.display="none";
mailLight.style.display="block";
     
    currMode = darkMode;
});

// <--------------git-button---------------->
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
gitButton[4].addEventListener("click", () => {
    window.location.href = "https://github.com/prangya-meher/todo-list";
});

// <-----------live-demo-------------->
liveDemo[0].addEventListener("click", () => {
    window.location.href = "https://stream-flix-gamma.vercel.app/";
});
liveDemo[1].addEventListener("click", () => {
    window.location.href = "https://weather-app-tan-six-39.vercel.app/";
});
liveDemo[2].addEventListener("click", () => {
    window.location.href = "https://calculator-ebon-zeta-34.vercel.app/";
});
liveDemo[3].addEventListener("click", () => {
    window.location.href = "https://game-hub-flame-tau.vercel.app/";
});
liveDemo[4].addEventListener("click", () => {
    window.location.href = "https://todo-list-orpin-six.vercel.app/";
});


