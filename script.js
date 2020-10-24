const navbar = document.querySelector('#navbar')
const slideButtonLeft = document.querySelector('#slide-button-left');
const slideButtonRight = document.querySelector('#slide-button-right');
const welcomeText = document.querySelector('#welcome-text')
const resume = document.querySelector('#resume')
const skills = document.querySelector('#skills')
const personal = document.querySelector('#personal')
const chartButtons = Array.from(document.querySelectorAll('.chart-button'));
const resume_stations = Array.from(document.querySelectorAll('.time-line-station'))
const stationName = document.querySelector('#station-name')
const stationDuration = document.querySelector('#station-duration')
const stationTechnologies = document.querySelector('#station-technologies')
const stationDescription = document.querySelector('#station-description')

resume.style.display='none' 
personal.style.display='none' 
let currPersonalPos = 'text'

window.addEventListener("scroll", checkOffSet);
chartButtons.forEach(button => button.addEventListener('click', changeChart));
slideButtonLeft.addEventListener('click', slide_left)
slideButtonRight.addEventListener('click', slide_right)
resume_stations.forEach(station => station.addEventListener('click', activte_resume_station, false))
resume_stations.forEach(station => station.addEventListener('mouseenter', setHiglight, false))
resume_stations.forEach(station => station.addEventListener('mouseleave', revertHighlight, false))

function slide_right(){

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

function changeChart(e){
    chartButtons.forEach(button => button.classList.add('is-outlined'))
    document.querySelector('#'+e.target.id).classList.remove('is-outlined')

    if(e.target.id == 'chart-button-1'){
        zingchart.render({
            id: 'skillChart',
            data: webDevChartConfig,
            width: '100%',
            height: '100%',
          });
    } else if(e.target.id == 'chart-button-2'){
        zingchart.render({
            id: 'skillChart',
            data: dataAnalysisChartConfig,
            width: '100%',
            height: '100%',
          });
    } else if(e.target.id == 'chart-button-3'){
        zingchart.render({
            id: 'skillChart',
            data: generalChartConfig,
            width: '100%',
            height: '100%',
          });
    } else if(e.target.id == 'chart-button-4'){
        zingchart.render({
            id: 'skillChart',
            data: usageChart,
            width: '100%',
            height: '100%',
          });
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

function setHiglight(e){
    e.target.classList.add('station-hovered')
    e.target.childNodes[1].style.color = 'hsl(159, 83%, 27%)'
}

function revertHighlight(e){
    e.target.classList.remove('station-hovered')
    e.target.childNodes[1].style.color = 'black'
}

function activte_resume_station(e){

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

var usageChart = {
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
            0,1,2,2,2,3,3,2,2,2,1,1,1,1,1,1,1,1
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
        "values": [0,0,0,0,1,2,2,2,2,2,3,3,4,4,5,5,5,5],
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
        "values": [0,0,0,0,1,1,2,2,2,3,3,2,2,3,3,2,2,2],
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
        "values": [0,0,0,0,0,0,1,2,2,2,1,1,1,1,1,2,4,5],
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
        "values": [0,0,1,2,2,2,1,1,1,0,0,0,0,0,0,0,0,0],
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
        "values": [0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,2,2,3],
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
      }
    ]
  };

let webDevChartData = [{
    id: 'WebDevelopment',
    text: 'WebDevelopment',
    parent: ''
  }, {
    id: 'front-end',
    text: 'front-end',
    parent: 'WebDevelopment'
  }, {
    id: 'css',
    text: 'css',
    parent: 'front-end'
  }, {
    id: 'Bnotstrap4',
    text: 'bootstrap4',
    parent: 'css',
    value: 1
  }, {
    id: 'bulma',
    text: 'bulma',
    parent: 'css',
    value: 1
  }, {
    id: 'SASS',
    text: 'SASS',
    parent: 'css',
    value: 1
  }, {
    id: 'javascript',
    text: 'javascript',
    parent: 'front-end'
  }, {
    id: 'ES6',
    text: 'ES6',
    parent: 'javascript',
    value: 1
  }, {
    id: 'typescript',
    text: 'typescript',
    parent: 'javascript',
    value: 1
  }, {
    id: 'vuejs',
    text: 'Vue.js',
    parent: 'javascript',
    value: 1
  }, {
    id: 'html',
    text: 'html',
    parent: 'front-end',
    value: 1
  }, {
    id: 'back-end',
    text: 'back-end',
    parent: 'WebDevelopment'
  },  {
    id: 'frameworks',
    text: 'frameworks',
    parent: 'WebDevelopment'
  },   {
    id: 'django',
    text: 'django',
    parent: 'frameworks',
    value: 1
  },   {
    id: 'flask',
    text: 'flask',
    parent: 'frameworks',
    value: 1
  }, {
    id: 'databases',
    text: 'databases',
    parent: 'back-end'
  }, {
    id: 'MongoDB',
    text: 'MongoDB',
    parent: 'databases',
    value: 1
  }, {
    id: 'PostGresSQL',
    text: 'PostGresSQL',
    parent: 'databases',
    value: 1
  }, {
    id: 'python',
    text: 'python',
    parent: 'back-end',
    value: 1
  }];

let webDevChartConfig = {
    type: 'sunburst',
    plot: {
        tooltip: {
          align: 'left',
          padding: '10px 15px',
          borderRadius: '3px',
          thousandsSeparator: ','
        },
        valueBox: {
          text: '%data-vbtext',
          color: '#424242',
          fontSize: '10px',
          visible: null
        },
        tooltipText: '<span style=font-size:19px>%plot-text</span>',
      },
            
    plotarea: {
        margin: '5px'
    },
    options: {
        space: 0,
        slice: 0,
        palette: ['#7CA82B', '#29A2CC', '#D31E1E', '#EF8535', '#A05F18', '#265E96', '#6B7075', '#28536B', '#A87356', '#70AE6E', '#764493', '#BA163B', '#E8630A']
    },
    scaleR: {
        RefAngle: 180,
        Aperture: 180
    },
    series: webDevChartData
}

let dataAnalysisChartData = [{
    id: 'data-analysis',
    text: 'data-analysis',
    parent: ''
  }, {
    id: 'front-end',
    text: 'front-end',
    parent: 'data-analysis'
  },{
    id: 'back-end',
    text: 'back-end',
    parent: 'data-analysis'
  },  {
    id: 'frameworks',
    text: 'frameworks',
    parent: 'data-analysis'
  }];

  let dataAnalysisChartConfig = {
    type: 'sunburst',
    plot: {
        tooltip: {
          align: 'left',
          padding: '10px 15px',
          borderRadius: '3px',
          thousandsSeparator: ','
        },
        valueBox: {
          text: '%data-vbtext',
          color: '#424242',
          fontSize: '10px',
          visible: null
        },
        tooltipText: '<span style=font-size:19px>%plot-text</span>',
      },
            
    plotarea: {
        margin: '5px'
    },
    options: {
        space: 0,
        slice: 0,
        palette: ['#7CA82B', '#29A2CC', '#D31E1E', '#EF8535', '#A05F18', '#265E96', '#6B7075', '#28536B', '#A87356', '#70AE6E', '#764493', '#BA163B', '#E8630A']
    },
    scaleR: {
        RefAngle: 180,
        Aperture: 180
    },
    series: dataAnalysisChartData
}

let generalChartData = [{
    id: 'data-analysis',
    text: 'data-analysis',
    parent: ''
  }, {
    id: 'front-end',
    text: 'front-end',
    parent: 'data-analysis'
  },{
    id: 'back-end',
    text: 'back-end',
    parent: 'data-analysis'
  },  {
    id: 'frameworks',
    text: 'frameworks',
    parent: 'data-analysis'
  }];

  let generalChartConfig = {
    type: 'sunburst',
    plot: {
        tooltip: {
          align: 'left',
          padding: '10px 15px',
          borderRadius: '3px',
          thousandsSeparator: ','
        },
        valueBox: {
          text: '%data-vbtext',
          color: '#424242',
          fontSize: '10px',
          visible: null
        },
        tooltipText: '<span style=font-size:19px>%plot-text</span>',
      },
            
    plotarea: {
        margin: '5px'
    },
    options: {
        space: 0,
        slice: 0,
        palette: ['#7CA82B', '#29A2CC', '#D31E1E', '#EF8535', '#A05F18', '#265E96', '#6B7075', '#28536B', '#A87356', '#70AE6E', '#764493', '#BA163B', '#E8630A']
    },
    scaleR: {
        RefAngle: 180,
        Aperture: 180
    },
    series: generalChartData
}

let skillCloudConfig = {
    type: 'wordcloud',
    options: {
      text: 'Python Javascript Java C++ HTML CSS SASS Vue.js Bulma Bootstrap MongoDB PostgreSQL Typescript ES6 Django Flask Linux MacOS Git GitHub BitBucket Bash',
      aspect: 'spiral',
      colorType: 'palette',
      ignore: ['establish', 'this'],
      maxItems: 50,
      minLength: '3px',
      palette: ['#D32F2F', '#1976D2', '#9E9E9E', '#E53935', '#1E88E5', '#7E57C2', '#F44336', '#2196F3', '#A1887F'],
      rotate: true,
      style: {
        hoverState: {
          backgroundColor: '#1976D2',
          borderColor: 'none',
          borderRadius: '3px',
          fontColor: 'white'
        }
      }
    }
  };
   
  zingchart.render({
    id: 'skillChart',
    data: skillCloudConfig,
    width: '100%',
    height: '100%',
  });

