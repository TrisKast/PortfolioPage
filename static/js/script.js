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
const personal = document.querySelector('#personal')
const chartButtons = Array.from(document.querySelectorAll('.chart-button'));
const resume_stations = Array.from(document.querySelectorAll('.time-line-station'))
const stationName = document.querySelector('#station-name')
const stationDuration = document.querySelector('#station-duration')
const stationTechnologies = document.querySelector('#station-technologies')
const stationDescription = document.querySelector('#station-description')
const skillExplanation = document.querySelector('#skill-explanation')
const skillName = document.querySelector('#skillName')
const skillDescription = document.querySelector('#skillDescription')
const stationTechHeading = document.querySelector('#station-tech-heading')
const x = window.matchMedia("(max-width: 768px)")

let currPersonalPos = ''
let displaySkillExplanation = false

skillName.style.display='none'
skillDescription.style.display='none'
resume.style.display='none' 
personal.style.display='none' 


if (x.matches) {
    slideButtonLeft.style.display='none'
    slideButtonRight.style.display='none'
    resume.style.display='flex' 
    personal.style.display='block' 
}

window.addEventListener("scroll", checkOffSet);
chartButtons.forEach(button => button.addEventListener('click', changeChart));
slideButtonLeft.addEventListener('click', slide_left)
slideButtonRight.addEventListener('click', slide_right)
resume_stations.forEach(station => station.addEventListener('click', activte_resume_station, false))
resume_stations.forEach(station => station.addEventListener('mouseenter', setHiglight, false))
resume_stations.forEach(station => station.addEventListener('mouseleave', revertHighlight, false))

window.onload = function() {
    currPersonalPos = 'text';
    welcomeText.style.display='flex';
};

function changeChart(e){
    chartButtons.forEach(button => button.classList.add('is-outlined'))
    document.querySelector('#'+e.target.id).classList.remove('is-outlined')

    skillName.innerHTML = ''
    skillDescription.innerHTML = ''

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
        skillName.style.display = 'block'
        skillDescription.style.display = 'block'
    }else{
        skillName.style.display = 'none'
        skillDescription.style.display = 'none'
    }
    
    chart.bind('node_mouseover', function(e) {
        skillName.innerHTML = e['data-vbtext']
        if(skillDescriptionDict[e['data-uid']]){
            skillDescription.innerHTML = skillDescriptionDict[e['data-uid']]
        } else {
            skillDescription.innerHTML = ''
        }
      });
}

function slide_right(){

  if (! x.matches) {
    if(currPersonalPos == 'text'){
        welcomeText.style.display='none' 
        resume.style.display='flex' 
        currPersonalPos = 'resume'
    }else if(currPersonalPos == 'resume'){
        resume.style.display='none' 
        personal.style.display='block' 
        currPersonalPos = 'personal'
    } else if(currPersonalPos == 'personal'){
        personal.style.display='none' 
        welcomeText.style.display='flex' 
        currPersonalPos = 'text'
    } 
  }
}

function slide_left(){
    if (! x.matches) {
        if(currPersonalPos == 'text'){
            welcomeText.style.display='none' 
            personal.style.display='block' 
            currPersonalPos = 'personal'
        }else if(currPersonalPos == 'personal'){
            personal.style.display='none' 
            resume.style.display='flex' 
            currPersonalPos = 'resume'
        } else if(currPersonalPos == 'resume'){
            resume.style.display='none' 
            welcomeText.style.display='flex' 
            currPersonalPos = 'text'
        }
    }
}

function checkOffSet(e){
    if(window.pageYOffset > 0){
        navbar.style.backgroundColor = "#F8F5F6";
        navbar.style.padding = "0.5%";
        navbar.style.borderBottom = "thin solid black";
    }
    else{
        navbar.style.backgroundColor = "transparent";
        navbar.style.padding = "0.5%";
        navbar.style.borderBottom = "none";
    }
}

function setHiglight(e){
    e.target.classList.add('station-hovered')
    e.target.childNodes[1].style.color = '#21213C'
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
        stationDescription.innerHTML = `<p>
        The Bachelor's Degree in Bioinformatics teached me an overall basic understandig of Computerscience. 
        The theoretical as the technical aspects as well as some hands on experience in weekly exercises in several languages over the years.
        This includes Java, C++, Javascript, Python and R, basic concepts of development and training in the "developers way of thinking".
        Furthermore we learned the biology and chemistry needed to understand bioinformatics experiments and approaches and 
        strengthend this knowledge in multiple laboratory intervals.</p>
        <ul>
            <li>
                Several courses in Computer Science and Mathematics
            </li>
            <li>
                Training in various languages, e.g. Java, Python or Javascript
            </li>
            <li>
                Knowledge of algorithms, datastrcutures and network technolgies
            </li>
            <li>
                Theoretical and practical training in Biology and Chemistry
            </li>
        </ul>`
        stationTechHeading.innerHTML = 'Relevant Courses:'
        stationTechnologies.innerHTML = `Computerscience | Mathematics | Technical CS | Theoretical CS | Datacompression |
                                         Stochastics | Algorithms | Software Development | Internet Technology | IoT`

    }else if(e.target.id == 'station-MSc-wrapper' || e.target.id == 'station-MSc'){
        document.querySelector('#station-MSc-wrapper').classList.add('selected-station')

        stationName.innerHTML = 'Master of Science, Bioinformatics'
        stationDuration.innerHTML = 'Eberhard-Karls University, Tübingen <br> 10/2016 - 01/2019'
        stationDescription.innerHTML =  `<p>In the following two years Masters Course the focus layed heavily on data analysis and visualisation. 
                                            Herefore most of the multiple weekly assignments were handled in Python and R. 
                                            I dived deep into bioinformatics, data processing and scripting, all proficiencies that were also handled in two intense block courses.
                                            On the biochemistry side we focussed only on aspects that are of importance for bioinformatics, like genetics or micro biology.</p>
        <ul>
            <li>
                Advanced knowlege of Python, R and Javascript
            </li>
            <li>
                Focus on data analysis and data visualization
            </li>
            <li>
                Deep understanding of Bioinformatics and processing of bioinformatic data
            </li>
        </ul>`
        stationTechHeading.innerHTML = 'Relevant Courses:'
        stationTechnologies.innerHTML = `Sequence Bioinformatics | Structure Bioinformatics | Drug Design | Data Visualization | MachineLearning for Health |
                                        Advanced Webdevelopment | Softwarequality | Digital Communication | Mathematical Logic | Graph Databases`

    } else if(e.target.id == 'station-working-student-wrapper' || e.target.id == 'station-working-student'){
        document.querySelector('#station-working-student-wrapper').classList.add('selected-station')

        stationName.innerHTML = 'Working Student'
        stationDuration.innerHTML = 'Eberhard-Karls University, Applied Bioinformatics Group, Tübingen, <br> 04/2017 - 03/2018'
        stationDescription.innerHTML = ` <p>During my Master Degree I worked as a working student in one of our research groups, the 'Applied bioinformativs Group'.</p>
        <ul>
            <li>
                MD-Simulations with GROMCAS and PyMOL
            </li>
            <li>
                Implementing a RESTful API for ArangoDB, a flexbile multi-model database
            </li>
        </ul>`
        stationTechHeading.innerHTML = 'Stack:'
        stationTechnologies.innerHTML = 'GROMACS | PyMOL | Python | AQL (SQL) | Java'


    } else if(e.target.id == 'station-salesman-wrapper' || e.target.id == 'station-salesman'){
        document.querySelector('#station-salesman-wrapper').classList.add('selected-station')

        stationName.innerHTML = 'Salesman'
        stationDuration.innerHTML = 'Nike Outlet Store, Metzingen <br> 08/2015 - 09/2016'
        stationDescription.innerHTML = ` <p>During my days as an undergrate I worked as a Vendor at the Nike Outlet Store in Metzingen.</p>
        <ul>
            <li>
                Selling shoes and apparal, sportswear as casualwear 
            </li>
            <li>
                Identifying, together with the customer, the right running shoe that fits perfectly their needs and goals
            </li>
            <li>
                Staying up to date with new technologies from NIKE and running shoes in general
            </li>
            <li>
                Training the new employees in the range of products and technologies used in these products, such as shoe cushioning or surface materials
            </li>
        </ul>`
        stationTechHeading.innerHTML = 'Stack:'
        stationTechnologies.innerHTML = 'Consultancy'

    } else if(e.target.id == 'station-DZNE-wrapper' || e.target.id == 'station-DZNE'){
        document.querySelector('#station-DZNE-wrapper').classList.add('selected-station')

        stationName.innerHTML = 'Computational Scientist'
        stationDuration.innerHTML = 'German Center for Neurodegenerative Diseases, Tübingen, <br> 02/2019 - 08/2020'
        stationDescription.innerHTML = ` <ul>
            <li>
                Whole Genome Sequencing assembly with data received by Illumina and Oxford Nanopore Technologies
            </li>
            <li>
                SNP and structural variant detection
            </li>
            <li>
            Scripting of analysis pipelines for different kinds of data, e.g. MicroRNA-Seq or CAGE-Seq
            </li>
            <li>
            Bioinformatic analysis of clinical bulk and SingleCell RNA-Seq data, e.g. <br>
                - Differential expression analysis <br>
                - Pathway regulation analysis <br>
                - Markergene detection
            </li>
        </ul>`
        stationTechHeading.innerHTML = 'Stack:'
        stationTechnologies.innerHTML = 'Python (numpy | pandas | dplyr) | Jupyter Notebook | R (DeSeq2 | EdgeR) | Docker | Nextflow | Snakemake | Bash | Ubuntu | CentOS | SQL | Git | Groovy | Kanban'

    }else if(e.target.id == 'station-MPUSP-wrapper' || e.target.id == 'station-MPUSP'){
        document.querySelector('#station-MPUSP-wrapper').classList.add('selected-station')

        stationName.innerHTML = 'Software Engineer'
        stationDuration.innerHTML = 'Max Planck Unit for the Science of Pathogenes, Berlin, <br> 02/2020 - currently'
        stationDescription.innerHTML =  ` <ul>
        <li>
            Bioinformatic analysis and visualization of heterogenous data, often generated by CRISPR experiments
        </li>
        <li>
            Full-Stack Development of an internal webpage to interact with the institute’s sample database and do basic data science / data visualization
        </li>
    </ul>`
        stationTechHeading.innerHTML = 'Stack:'
        stationTechnologies.innerHTML = 'Python | Jupyter Notebook | Javascript | HTML | CSS | Vue.js | Flask | Scientific Linux | MongoDb | NGINX | Gunicorn | Supervisor'
    }
}
   
zingchart.render({
    id: 'skillChart',
    data: skillCloudConfig,
    width: '100%',
    height: '100%',
  });

