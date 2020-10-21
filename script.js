window.addEventListener("scroll", checkOffSet);


const navbar = document.querySelector('#navbar')

const slideButtonLeft = document.querySelector('#slide-button-left');
const slideButtonRight = document.querySelector('#slide-button-right');

const welcomeText = document.querySelector('#welcome-text')
const resume = document.querySelector('#resume')
resume.style.display='none' 
const skillwheel = document.querySelector('#skillwheel')
skillwheel.style.display='none' 
const personal = document.querySelector('#personal')
personal.style.display='none' 
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
        personal.style.display='block' 
        currPersonalPos = 'personal'
    } else if(currPersonalPos == 'personal'){
        personal.style.display='none' 
        welcomeText.style.display='block' 
        currPersonalPos = 'text'
    }
    
}

function slide_left(){

    if(currPersonalPos == 'text'){
        welcomeText.style.display='none' 
        personal.style.display='block' 
        currPersonalPos = 'personal'
    }else if(currPersonalPos == 'personal'){
        personal.style.display='none' 
        resume.style.display='block' 
        currPersonalPos = 'resume'
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


const resume_stations = Array.from(document.querySelectorAll('.time-line-station'))

resume_stations.forEach(station => station.addEventListener('click', activte_resume_station))
resume_stations.forEach(station => station.addEventListener('mouseenter', setHiglight))
resume_stations.forEach(station => station.addEventListener('mouseleave', revertHighlight))

function setHiglight(e){
    e.target.style.backgroundColor = 'mediumaquamarine'
    e.target.childNodes[1].style.color = 'red'
}

function revertHighlight(e){
    e.target.style.backgroundColor = 'white'
    e.target.childNodes[1].style.color = 'black'
}

const stationName = document.querySelector('#station-name')
const stationDuration = document.querySelector('#station-duration')
const stationTechnologies = document.querySelector('#station-technologies')
const stationDescription = document.querySelector('#station-description')

function activte_resume_station(e){
    
    resume_stations.forEach(station => station.style.backgroundColor = 'white')

    if(e.target.nodeName  == 'P'){
        currTargetId = e.target.parentNode.id
    } else if(e.target.nodeName  == 'DIV'){
        currTargetId = e.target.id
    }
    console.log(currTargetId)

    const currTarget = document.querySelector(`#${currTargetId}`)


    currTarget.style.backgroundColor = 'mediumaquamarine'

    
    
    


    
    if(currTarget.id == 'station-B.Sc.-wrapper'){
        stationName.innerHTML = 'Bachelor of Science, Bioinformatics'
        stationDuration.innerHTML = 'Tübingen, 04/2012 - 10/2016'
        stationDescription.innerHTML = `                            <p>I did this and that:</p>
        <ul>
            <li>
                Basic knowlege of varios languages, e.g. Java, Python and Javascript
            </li>
            <li>
                Basics knowledge of Algorithms and Datastrcutures
            </li>
            <li>
                Basic knowlege about network technolgies 
            </li>
            <li>
                Basic knowlege and terminolgy of Bioinformatics
            </li>
        </ul>`
        stationTechnologies.innerHTML = 'Docker | Bash | Linux'
    }else if(currTarget.id == 'station-M.Sc.-wrapper'){
        stationName.innerHTML = 'Master of Science, Bioinformatics'
        stationDuration.innerHTML = 'Tübingen, 10/2016 - 01/2019'
        stationDescription.innerHTML = 'I did this and that'
        stationTechnologies.innerHTML = 'Docker | Bash | Linux'
    } else if(currTarget.id == 'station-working-student-wrapper'){
        stationName.innerHTML = 'German Center for Neurodegenerative Diseases'
        stationDuration.innerHTML = 'Tübingen, 02/2019 - 08/2020'
        stationDescription.innerHTML = 'I did this and that'
        stationTechnologies.innerHTML = 'Docker | Bash | Linux'
    } else if(currTarget.id == 'station-DZNE-wrapper'){
        stationName.innerHTML = 'German Center for Neurodegenerative Diseases'
        stationDuration.innerHTML = 'Tübingen, 02/2019 - 08/2020'
        stationDescription.innerHTML = 'I did this and that'
        stationTechnologies.innerHTML = 'Docker | Bash | Linux'
    }else if(currTarget.id == 'station-MPUSP-wrapper'){
        stationName.innerHTML = 'Max Planck Unit for the Science of Pathogenes'
        stationDuration.innerHTML = 'Berlin, 02/2020 - current'
        stationDescription.innerHTML = 'I did this and that'
        stationTechnologies.innerHTML = 'Javascript | Vue | Linux'
    }
    
}