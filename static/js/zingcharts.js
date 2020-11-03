export const usageChartConfig = {
    "type": "line",
    "utc": true,
    "plotarea": {
      "// margin": "dynamic 45 60 dynamic",
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
        "// padding": 7,
        "// marginRight": 17,
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
        "// padding": "10px",
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

export const webDevChartData = [{
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

export const webDevChartConfig = {
    type: 'sunburst',
    plot: {
        tooltip: {
          align: 'left',
          // padding: '10px 15px',
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
        // margin: '5px'
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

export const dataAnalysisChartData = [{
    id: 'data-analysis',
    text: 'data-analysis',
    parent: ''
  }, {
    id: 'python',
    text: 'Python',
    parent: 'data-analysis',
    value: 1
  },{
    id: 'r',
    text: 'R',
    parent: 'data-analysis',
    value: 1
  },  {
    id: 'octave',
    text: 'Octave',
    parent: 'data-analysis',
    value: 1
  },  {
    id: 'wms',
    text: 'WMS',
    parent: 'data-analysis'
  },  {
    id: 'snakemake',
    text: 'Snakemake',
    parent: 'wms',
    value: 1
  },  {
    id: 'nextflow',
    text: 'Nextflow',
    parent: 'wms',
    value: 1
  },  {
    id: 'tools',
    text: 'Tools',
    parent: 'data-analysis'
  },  {
    id: 'tableau',
    text: 'Tableau',
    parent: 'tools',
    value: 1
  }, {
    id: 'knime',
    text: 'Knime',
    parent: 'tools',
    value: 1
  } ];

export const dataAnalysisChartConfig = {
    type: 'sunburst',
    plot: {
        tooltip: {
          align: 'left',
          // padding: '10px 15px',
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
        // margin: '5px'
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

export const generalChartData = [{
    id: 'data-analysis',
    text: 'data-analysis',
    parent: ''
  }, {
    id: 'latex',
    text: 'Latex',
    parent: 'data-analysis'
  }, {
    id: 'git',
    text: 'Git',
    parent: 'data-analysis'
  }, {
    id: 'gitlab',
    text: 'GitLab',
    parent: 'git',
    value: 1
  }, {
    id: 'github',
    text: 'GitHub',
    parent: 'git',
    value: 1
  },{
    id: 'bash',
    text: 'Bash',
    parent: 'data-analysis',
    value: 1
  },  {
    id: 'os',
    text: 'os',
    parent: 'data-analysis'
  },  {
    id: 'linux',
    text: 'Linux',
    parent: 'os'
  },  {
    id: 'ubuntu',
    text: 'Ubuntu',
    parent: 'linux',
    value: 1
  }, {
    id: 'centos',
    text: 'CentOs',
    parent: 'linux',
    value: 1
  }, {
    id: 'scientificlinux',
    text: 'ScientificLinux',
    parent: 'linux',
    value: 1
  },  {
    id: 'macos',
    text: 'MacOs',
    parent: 'os',
    value: 1
  },{
    id: 'windows',
    text: 'Windows',
    parent: 'os',
    value: 1
  }, {
    id: 'office',
    text: 'Office',
    parent: 'windows',
    value: 1
  },  {
    id: 'docker',
    text: 'Docker',
    parent: 'data-analysis',
    value: 1
  }];

export const generalChartConfig = {
    type: 'sunburst',
    plot: {
        tooltip: {
          align: 'left',
          // padding: '10px 15px',
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
        // margin: '5px'
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

export const skillCloudConfig = {
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

export const skillDescriptionDict = 
{
'html':'HTML is the basic of Internet',
'css':'CSS makes the internet pretty',
'javascript':'Javascript makes internet fun!'
}