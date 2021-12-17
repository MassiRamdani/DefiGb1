 
var exp= [{
  "text":"Foire Aux Questions Étudiants & Personnels",
    "ratio": "7.59",
    "AA": "pass",
    "AALarge": "pass",
    "AAA": "pass",
    "AAALarge": "pass"
  },{
    "text":"Dépistage Covid 19",
      "ratio": "7.59",
      "AA": "pass",
      "AALarge": "pass",
      "AAA": "pass",
      "AAALarge": "pass"
    },{
      "text":"DÉCOUVRIR",
        "ratio": "7.59",
        "AA": "pass",
        "AALarge": "pass",
        "AAA": "pass",
        "AAALarge": "pass"
      },{
        "text":"Étudiants internationaux, pour un séjour d’études ou pour apprendre le français, vivez l’expérience de la Corse toute l’année !",
          "ratio": "7.59",
          "AA": "pass",
          "AALarge": "pass",
          "AAA": "pass",
          "AAALarge": "pass"
        },{
          "text":"L’institut d’études scientifiques de Cargèse,un lieu d’exception pour les rencontres scientifiques.",
            "ratio": "7.59",
            "AA": "pass",
            "AALarge": "pass",
            "AAA": "pass",
            "AAALarge": "pass"
          },{
  "text":"UNIVERSITa",
    "ratio": "7.59",
    "AA": "pass",
    "AALarge": "pass",
    "AAA": "pass",
    "AAALarge": "pass"
  },{
  "text":"ÉTUDIER",
    "ratio": "6.59",
    "AA": "fail",
    "AALarge": "pass",
    "AAA": "pass",
    "AAALarge": "fail"
  },{
  "text":"RECHERCHE",
    "ratio": "7.59",
    "AA": "pass",
    "AALarge": "fail",
    "AAA": "pass",
    "AAALarge": "fail"
  },{
    "text":"DÉVELOPPEMENT",
      "ratio": "2.59",
      "AA": "pass",
      "AALarge": "fail",
      "AAA": "pass",
      "AAALarge": "fail"
    },{
      "text":"INTERNATIONAL",
        "ratio": "6.59",
        "AA": "pass",
        "AALarge": "fail",
        "AAA": "pass",
        "AAALarge": "fail"
      },{
        "text":"EN CE MOMENT",
          "ratio": "2.59",
          "AA": "pass",
          "AALarge": "fail",
          "AAA": "pass",
          "AAALarge": "fail"
        },{
          "text":"Langouste rouge Palinurus elephas : La plateforme Stella Mare est l’un des trois laboratoires au monde à avoir obtenu des juvéniles",
            "ratio": "2.59",
            "AA": "pass",
            "AALarge": "fail",
            "AAA": "pass",
            "AAALarge": "fail"
          }];
exports.getObjectInDom = (req, res) => {
  const dom = require("../../dom.json");
  //var monJson = JSON.parse(fs.readFileSync(dom, 'utf8'));

  
 
  res.send(exp);
};
  
 

 