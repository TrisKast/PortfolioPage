window.addEventListener("scroll", checkOffSet);


const navbar = document.querySelector('#navbar')

const slideButtonLeft = document.querySelector('#slide-button-left');
const slideButtonRight = document.querySelector('#slide-button-right');
const welcomeText = document.querySelector('#welcome-text')
const resume = document.querySelector('#resume')
const skills = document.querySelector('#skills')
const personal = document.querySelector('#personal')

resume.style.display='none' 
skills.style.display='none' 
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
        skills.style.display='block' 
        currPersonalPos = 'skills'
    } else if(currPersonalPos == 'skills'){
        skills.style.display='none' 
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
        skills.style.display='block' 
        currPersonalPos = 'skills'
    }else if(currPersonalPos == 'skills'){
        skills.style.display='none' 
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
resume_stations.forEach(station => station.addEventListener('click', activte_resume_station, false))
resume_stations.forEach(station => station.addEventListener('mouseenter', setHiglight, false))
resume_stations.forEach(station => station.addEventListener('mouseleave', revertHighlight, false))

function setHiglight(e){
    e.target.classList.add('station-hovered')
    e.target.childNodes[1].style.color = 'hsl(159, 83%, 27%)'
}

function revertHighlight(e){
    e.target.classList.remove('station-hovered')
    e.target.childNodes[1].style.color = 'black'
}

const stationName = document.querySelector('#station-name')
const stationDuration = document.querySelector('#station-duration')
const stationTechnologies = document.querySelector('#station-technologies')
const stationDescription = document.querySelector('#station-description')

function activte_resume_station(e){

    //resume_stations.forEach(station => station.style.backgroundColor = 'white')
    resume_stations.forEach(station => station.classList.remove('selected-station'))

    //document.querySelector('#station-BSc-wrapper').classList.remove('selected-station')

    
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

var myConfig = {
    "type": "line",
    "utc": true,
    "plotarea": {
      "margin": "dynamic 45 60 dynamic",
    },
    "legend": {
      "layout": "float",
      "background-color": "none",
      "border-width": 0,
      "shadow": 0,
      "align": "center",
      "adjust-layout": true,
      "toggle-action": "remove",
      "item": {
        "padding": 7,
        "marginRight": 17,
        "cursor": "hand"
      }
    },
    "scale-x": {
    labels: [
        'Jan 2012',
        'Jul 2012',
        'Jan 2013',
        'Jul 2013',
        'Jan 2014',
        'Jul 2014',
        'Jan 2015',
        'Jul 2015',
        'Jan 2016',
        'Jul 2016',
        'Jan 2017',
        'Jul 2017',
        'Jan 2018',
        'Jul 2018',
        'Jan 2019',
        'Jul 2019',
        'Jan 2020',
        ]
    },
    "scale-y": {
      "line-color": "#f6f7f8",
      "shadow": 0,
      "guide": {
        "line-style": "dashed"
      },
      "label": {
        "text": "Usage",
      },
      "minor-ticks": 0,
      "thousands-separator": ","
    },
    "crosshair-x": {
      "line-color": "#efefef",
      "plot-label": {
        "border-radius": "5px",
        "border-width": "1px",
        "border-color": "#f6f7f8",
        "padding": "10px",
        "font-weight": "bold"
      },
      "scale-label": {
        "font-color": "#000",
        "background-color": "#f6f7f8",
        "border-radius": "5px"
      }
    },
    "tooltip": {
      "visible": false
    },
    "plot": {
      "highlight": true,
      "tooltip-text": "%t views: %v<br>%k",
      "shadow": 0,
      "line-width": "2px",
      "marker": {
        "type": "circle",
        "size": 3
      },
      "highlight-state": {
        "line-width": 3
      },
      "animation": {
        "effect": 1,
        "sequence": 2,
        "speed": 100,
      }
    },
    "series": [{
        "values": [
            0,
            1,
            2,
            2,
            2,
            3,
            3,
            2,
            2,
            2,
            2,
            2,
            1,
            1,
            1,
            1,
            1,
            1
        ],
        "text": "Java",
        "line-color": "#007790",
        "legend-item": {
          "background-color": "#007790",
          "borderRadius": 5,
          "font-color": "white"
        },
        "legend-marker": {
          "visible": false
        },
        "marker": {
          "background-color": "#007790",
          "border-width": 1,
          "shadow": 0,
          "border-color": "#69dbf1"
        },
        "highlight-marker": {
          "size": 6,
          "background-color": "#007790",
        }
      },
      {
        "values": [
            0,
            0,
            0,
            0,
            1,
            2,
            2,
            2,
            2,
            2,
            3,
            3,
            4,
            4,
            5,
            5,
            5,
            5
        ],
        "text": "Python",
        "line-color": "#009872",
        "legend-item": {
          "background-color": "#009872",
          "borderRadius": 5,
          "font-color": "white"
        },
        "legend-marker": {
          "visible": false
        },
        "marker": {
          "background-color": "#009872",
          "border-width": 1,
          "shadow": 0,
          "border-color": "#69f2d0"
        },
        "highlight-marker": {
          "size": 6,
          "background-color": "#009872",
        }
      },
      {
        "values": [
            0,
            0,
            0,
            0,
            1,
            1,
            2,
            2,
            2,
            3,
            3,
            2,
            2,
            3,
            3,
            2,
            2,
            2
        ],
        "text": "R",
        "line-color": "#da534d",
        "legend-item": {
          "background-color": "#da534d",
          "borderRadius": 5,
          "font-color": "white"
        },
        "legend-marker": {
          "visible": false
        },
        "marker": {
          "background-color": "#da534d",
          "border-width": 1,
          "shadow": 0,
          "border-color": "#faa39f"
        },
        "highlight-marker": {
          "size": 6,
          "background-color": "#da534d",
        }
      },
      {
        "values": [
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            2,
            2,
            2,
            1,
            1,
            1,
            1,
            1,
            2,
            4,
            5
        ],
        "text": "Javascript",
        "line-color": "rgb(165, 200, 130)",
        "legend-item": {
          "background-color": "rgb(165, 200, 130)",
          "borderRadius": 5,
          "font-color": "white"
        },
        "legend-marker": {
          "visible": false
        },
        "marker": {
          "background-color": "rgb(165, 200, 130)",
          "border-width": 1,
          "shadow": 0,
          "border-color": "#faa39f"
        },
        "highlight-marker": {
          "size": 6,
          "background-color": "rgb(165, 200, 130)",
        }
      },  
      {
        "values": [
            0,
            0,
            1,
            2,
            2,
            2,
            1,
            1,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "text": "C++",
        "line-color": "rgb(90, 177, 187)",
        "legend-item": {
          "background-color": "rgb(90, 177, 187)",
          "borderRadius": 5,
          "font-color": "white"
        },
        "legend-marker": {
          "visible": false
        },
        "marker": {
          "background-color": "rgb(90, 177, 187)",
          "border-width": 1,
          "shadow": 0,
          "border-color": "#faa39f"
        },
        "highlight-marker": {
          "size": 6,
          "background-color": "rgb(90, 177, 187)",
        }
      },
      {
        "values": [
            0,
            0,
            0,
            0,
            1,
            1,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2
        ],
        "text": "HTML+CSS",
        "line-color": "rgb(90, 177, 187)",
        "legend-item": {
          "background-color": "rgb(90, 177, 187)",
          "borderRadius": 5,
          "font-color": "white"
        },
        "legend-marker": {
          "visible": false
        },
        "marker": {
          "background-color": "rgb(90, 177, 187)",
          "border-width": 1,
          "shadow": 0,
          "border-color": "#faa39f"
        },
        "highlight-marker": {
          "size": 6,
          "background-color": "rgb(90, 177, 187)",
        }
      },
      {
        "values": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            3
        ],
        "text": "Vue.js",
        "line-color": "rgb(90, 177, 187)",
        "legend-item": {
          "background-color": "rgb(90, 177, 187)",
          "borderRadius": 5,
          "font-color": "white"
        },
        "legend-marker": {
          "visible": false
        },
        "marker": {
          "background-color": "rgb(90, 177, 187)",
          "border-width": 1,
          "shadow": 0,
          "border-color": "#faa39f"
        },
        "highlight-marker": {
          "size": 6,
          "background-color": "rgb(90, 177, 187)",
        }
      },
    ]
  };
   
  zingchart.render({
    id: 'myChart',
    data: myConfig,
  });