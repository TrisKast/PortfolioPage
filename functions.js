export function changeChart(e){
    chartButtons.forEach(button => button.classList.add('is-outlined'))
    document.querySelector('#'+e.target.id).classList.remove('is-outlined')

    if(e.target.id == 'chart-button-1'){
        displaySkillExplanation = true;
        var chart = zingchart.render({
            id: 'skillChart',
            data: webDevChartConfig,
            width: '100%',
            height: '100%',
          });
    } else if(e.target.id == 'chart-button-2'){
        displaySkillExplanation = true;
        var chart = zingchart.render({
            id: 'skillChart',
            data: dataAnalysisChartConfig,
            width: '100%',
            height: '100%',
          });
    } else if(e.target.id == 'chart-button-3'){
        displaySkillExplanation = true;
        var chart = zingchart.render({
            id: 'skillChart',
            data: generalChartConfig,
            width: '100%',
            height: '100%',
          });
    } else if(e.target.id == 'chart-button-4'){
        displaySkillExplanation = false;
        var chart = zingchart.render({
            id: 'skillChart',
            data: usageChartConfig,
            width: '100%',
            height: '100%',
          });
    }
    if (displaySkillExplanation){
        skillExplanation.style.display = 'block'
    }else{
        skillExplanation.style.display = 'none'
    }
    
    chart.bind('node_mouseover', function(e) {
        skillName.innerHTML = e['data-vbtext']
        skillDescription.innerHTML = skillDescriptionDict[e['data-uid']]
      });
}

export function slide_right(){

  if(currPersonalPos == 'text'){
      welcomeText.style.display='none' 
      resume.style.display='block' 
      currPersonalPos = 'resume'
  }else if(currPersonalPos == 'resume'){
      resume.style.display='none' 
      personal.style.display='block' 
      currPersonalPos = 'personal'
  } else if(currPersonalPos == 'personal'){
      personal.style.display='none' 
      welcomeText.style.display='block' 
      currPersonalPos = 'text'
  } 
}

export function slide_left(){

    if(currPersonalPos == 'text'){
        welcomeText.style.display='none' 
        personal.style.display='block' 
        currPersonalPos = 'personal'
    }else if(currPersonalPos == 'personal'){
        personal.style.display='none' 
        resume.style.display='block' 
        currPersonalPos = 'resume'
    } else if(currPersonalPos == 'resume'){
        resume.style.display='none' 
        welcomeText.style.display='block' 
        currPersonalPos = 'text'
    }
}

export function checkOffSet(e){
    if(window.pageYOffset > 0){
        navbar.style.backgroundColor = "white";
        navbar.style.padding = "0.5%";
        navbar.style.borderBottom = "thin solid black";
    }
    else{
        navbar.style.backgroundColor = "transparent";
        navbar.style.padding = "0.5%";
        navbar.style.borderBottom = "none";
    }
}

export function setHiglight(e){
    e.target.classList.add('station-hovered')
    e.target.childNodes[1].style.color = 'hsl(159, 83%, 27%)'
}

export function revertHighlight(e){
    e.target.classList.remove('station-hovered')
    e.target.childNodes[1].style.color = 'black'
}

export function activte_resume_station(e){

    resume_stations.forEach(station => station.classList.remove('selected-station'))

    
    if(e.target.id == 'station-BSc-wrapper' || e.target.id == 'station-BSc'){
        document.querySelector('#station-BSc-wrapper').classList.add('selected-station')

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

    }else if(e.target.id == 'station-MSc-wrapper' || e.target.id == 'station-MSc'){
        document.querySelector('#station-MSc-wrapper').classList.add('selected-station')

        stationName.innerHTML = 'Master of Science, Bioinformatics'
        stationDuration.innerHTML = 'Tübingen, 10/2016 - 01/2019'
        stationDescription.innerHTML = 'I did this and that'
        stationTechnologies.innerHTML = 'Docker | Bash | Linux'

    } else if(e.target.id == 'station-working-student-wrapper' || e.target.id == 'station-working-student'){
        document.querySelector('#station-working-student-wrapper').classList.add('selected-station')

        stationName.innerHTML = 'Eberhard-Karls Universtiy'
        stationDuration.innerHTML = 'Tübingen, 02/2019 - 08/2020'
        stationDescription.innerHTML = 'I did this and that'
        stationTechnologies.innerHTML = 'Docker | Bash | Linux'

    } else if(e.target.id == 'station-DZNE-wrapper' || e.target.id == 'station-DZNE'){
        document.querySelector('#station-DZNE-wrapper').classList.add('selected-station')

        stationName.innerHTML = 'German Center for Neurodegenerative Diseases'
        stationDuration.innerHTML = 'Tübingen, 02/2019 - 08/2020'
        stationDescription.innerHTML = 'I did this and that'
        stationTechnologies.innerHTML = 'Docker | Bash | Linux'

    }else if(e.target.id == 'station-MPUSP-wrapper' || e.target.id == 'station-MPUSP'){
        document.querySelector('#station-MPUSP-wrapper').classList.add('selected-station')

        stationName.innerHTML = 'Max Planck Unit for the Science of Pathogenes'
        stationDuration.innerHTML = 'Berlin, 02/2020 - current'
        stationDescription.innerHTML = 'I did this and that'
        stationTechnologies.innerHTML = 'Javascript | Vue | Linux'
    }
    
}