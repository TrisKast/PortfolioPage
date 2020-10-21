window.addEventListener("scroll", checkOffSet);


const navbar = document.querySelector('#navbar')

const slideButtonLeft = document.querySelector('#slide-button-left');
const slideButtonRight = document.querySelector('#slide-button-right');

const welcomeText = document.querySelector('#welcome-text')
const resume = document.querySelector('#resume')
resume.style.display='none' 
const skillwheel = document.querySelector('#skillwheel')
skillwheel.style.display='none' 
let currPersonalPos = 'text'

slideButtonLeft.addEventListener('click', slide_left)
slideButtonRight.addEventListener('click', slide_right)

function slide_right(){

    if(currPersonalPos == 'text'){
        welcomeText.style.display='none' 
        resume.style.display='block' 
        currPersonalPos = 'resume'
    }else if(currPersonalPos == 'resume'){
        resume.style.display='none' 
        skillwheel.style.display='block' 
        currPersonalPos = 'skillwheel'
    } else if(currPersonalPos == 'skillwheel'){
        skillwheel.style.display='none' 
        welcomeText.style.display='block' 
        currPersonalPos = 'text'
    }
    
}

function slide_left(){

    if(currPersonalPos == 'text'){
        welcomeText.style.display='none' 
        skillwheel.style.display='block' 
        currPersonalPos = 'skillwheel'
    }else if(currPersonalPos == 'skillwheel'){
        skillwheel.style.display='none' 
        resume.style.display='block' 
        currPersonalPos = 'resume'
    } else if(currPersonalPos == 'resume'){
        resume.style.display='none' 
        welcomeText.style.display='block' 
        currPersonalPos = 'text'
    }
}

function checkOffSet(e){
    if(window.pageYOffset > 0){
        navbar.style.backgroundColor = "white";
        navbar.style.padding = "1%";
        navbar.style.borderBottom = "thin solid black";
    }
    else{
        navbar.style.backgroundColor = "transparent";
        navbar.style.padding = "1%";
        navbar.style.borderBottom = "none";
    }
}