import {
  usageChartConfig,
  webDevChartConfig,
  dataAnalysisChartConfig,
  generalChartConfig,
  skillCloudConfig,
  skillDescriptionDict
} from './zingcharts.js'

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
const skillExplanation = document.querySelector('#skill-explanation')
const skillName = document.querySelector('#skill-name')
const skillDescription = document.querySelector('#skill-description')
const stationTechHeading = document.querySelector('#station-tech-heading')

resume.style.display='none' 
personal.style.display='none' 
skillExplanation.style.display='none'
let currPersonalPos = 'text'
let displaySkillExplanation = false

window.addEventListener("scroll", checkOffSet);
chartButtons.forEach(button => button.addEventListener('click', changeChart));
slideButtonLeft.addEventListener('click', slide_left)
slideButtonRight.addEventListener('click', slide_right)
resume_stations.forEach(station => station.addEventListener('click', activte_resume_station, false))
resume_stations.forEach(station => station.addEventListener('mouseenter', setHiglight, false))
resume_stations.forEach(station => station.addEventListener('mouseleave', revertHighlight, false))



function changeChart(e){
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
        //navbar.style.padding = "0.5%";
        navbar.style.borderBottom = "thin solid black";
    }
    else{
        navbar.style.backgroundColor = "transparent";
        //navbar.style.padding = "0.5%";
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
        stationDuration.innerHTML = 'Eberhard-Karls University, Tübingen <br> 04/2012 - 10/2016'
        stationDescription.innerHTML = `<p>The Bachelor's Degree in Bioinformatics teached me an overall basic understandig of Computerscience. The theoretical as the technical aspects as well as some hands on experience in weekly exercises in several languages over the years.
         Furthermore we learned the biology and chemistry needed to understand bioinformatics experiments and concepts.</p>
        <ul>
            <li>
                Basic knowlege of varios languages, e.g. Java, Python and Javascript
            </li>
            <li>
                Basics knowledge of Algorithms, network technolgies and datastructures
            </li>
            <li>
                Basic knowlege about network technolgies 
            </li>
            <li>
                Basic knowlege and terminolgy of Bioinformatics, Biochemistry, Biology and Chemistry
            </li>
        </ul>`
        stationTechHeading.innerHTML = 'Relevant Courses:'
        stationTechnologies.innerHTML = `Computerscience | Mathematics | Technical CS | Theoretical CS | Datacompression |
                                         Stochastics | Algorithms | Software Development | Internet Technology | IoT`

    }else if(e.target.id == 'station-MSc-wrapper' || e.target.id == 'station-MSc'){
        document.querySelector('#station-MSc-wrapper').classList.add('selected-station')

        stationName.innerHTML = 'Master of Science, Bioinformatics'
        stationDuration.innerHTML = 'Eberhard-Karls University, Tübingen <br> 10/2016 - 01/2019'
        stationDescription.innerHTML =  `<p>In the following Masters Course the focus layed heavily on analysis and visualisation. Herefore most of the assignments were handled in Python and R.</p>
        <ul>
            <li>
                Advanced knowlege of Python, R and Javascript
            </li>
            <li>
                Focus on Dataanalysis and Datavisualization
            </li>
            <li>
                Deep understanding of Bioinformatics and processing of bioinformatic data
            </li>
            <li>
                Advanced knowlege and cell biology, micro biology and genetics
            </li>
        </ul>`
        stationTechHeading.innerHTML = 'Relevant Courses:'
        stationTechnologies.innerHTML = `Sequence Bioinformatics | Structure Bioinformatics | Drug Design | Data Visualization | MachineLearning for Health |
                                        Advanced Webdevelopment | Softwarequality | Digital Communication | Mathematical Logic | Graph Databases`

    } else if(e.target.id == 'station-working-student-wrapper' || e.target.id == 'station-working-student'){
        document.querySelector('#station-working-student-wrapper').classList.add('selected-station')

        stationName.innerHTML = 'Working Student'
        stationDuration.innerHTML = 'Eberhard-Karls University, Applied Bioinformatics Group, Tübingen, <br> 02/2019 - 08/2020'
        stationDescription.innerHTML = ` <ul>
            <li>
                MD-Simulations with GROMCAS and PyMOL
            </li>
            <li>
                Implementing a RESTful API for ArangoDB, a flexbile multi-model database
            </li>
        </ul>`
        stationTechHeading.innerHTML = 'Used Technologies:'
        stationTechnologies.innerHTML = 'GROMACS | PyMOL | Python | AQL (SQL) | Javascript | Flask'

    } else if(e.target.id == 'station-DZNE-wrapper' || e.target.id == 'station-DZNE'){
        document.querySelector('#station-DZNE-wrapper').classList.add('selected-station')

        stationName.innerHTML = 'Computational Scientist'
        stationDuration.innerHTML = 'German Center for Neurodegenerative Diseases, Tübingen, <br> 02/2019 - 08/2020'
        stationDescription.innerHTML = 'I did this and that'
        stationDescription.innerHTML = ` <ul>
            <li>
                Whole genome assembly with second and third generation sequencing data
            </li>
            <li>
                SNP and structural variant detection
            </li>
            <li>
                Scripting of bioinformatic analysis pipelines, e.g. for MicroRNA-Seq, CAGE-Seq or enrichment analysis data
            </li>
            <li>
                Explorative analysis of clinical bulk and SingleCell RNA-Seq data, e.g. <br>
                - Differential expression analysis <br>
                - Pathway regulation analysis <br>
                - Markergene detection
            </li>
        </ul>`
        stationTechHeading.innerHTML = 'Used Technologies:'
        stationTechnologies.innerHTML = 'Python (numpy | pandas | dplyr) | R (DeSeq2 | EdgeR) | Docker | Nextflow | Snakemake | Bash | Ubuntu | CentOS | SQL | Git | Groovy | Kanban'

    }else if(e.target.id == 'station-MPUSP-wrapper' || e.target.id == 'station-MPUSP'){
        document.querySelector('#station-MPUSP-wrapper').classList.add('selected-station')

        stationName.innerHTML = 'Software Engineer'
        stationDuration.innerHTML = 'Max Planck Unit for the Science of Pathogenes, Berlin, <br> 02/2020 - current'
        stationDescription.innerHTML =  ` <ul>
        <li>
            Data analysis and visualization in the context of sequence bioinformatics on complex CRISPR data
        </li>
        <li>
            Conception, maintainance and implementation of new features for the institutes database service, e.g. <br>
            - Data storage and retrival <br>
            - Data visualization <br>
            - Ordering 
        </li>
    </ul>`
        stationTechHeading.innerHTML = 'Used Technologies:'
        stationTechnologies.innerHTML = 'Python | Javascript | Vue.js | Flask | Linux | MongoDb | Server Setup'
    }
    
}
   
  zingchart.render({
    id: 'skillChart',
    data: skillCloudConfig,
    width: '100%',
    height: '100%',
  });

