
var exp= [{
  "text":"JavaScript Demo: JSON.parse()",
    "ratio": "1.59",
    "AA": "pass",
    "AALarge": "pass",
    "AAA": "pass",
    "AAALarge": "pass"
  },{
  "text":"Exemples",
    "ratio": "5.59",
    "AA": "fail",
    "AALarge": "pass",
    "AAA": "pass",
    "AAALarge": "fail"
  },{
  "text":"Utiliser le paramètre reviver",
    "ratio": "2.59",
    "AA": "pass",
    "AALarge": "fail",
    "AAA": "pass",
    "AAALarge": "fail"
  },{
    "text":"Utiliser le paramètre reviver",
      "ratio": "2.59",
      "AA": "pass",
      "AALarge": "fail",
      "AAA": "pass",
      "AAALarge": "fail"
    },{
      "text":"Utiliser le paramètre reviver",
        "ratio": "2.59",
        "AA": "pass",
        "AALarge": "fail",
        "AAA": "pass",
        "AAALarge": "fail"
      },{
        "text":"Utiliser le paramètre reviver",
          "ratio": "2.59",
          "AA": "pass",
          "AALarge": "fail",
          "AAA": "pass",
          "AAALarge": "fail"
        },{
          "text":"Utiliser le paramètre reviver",
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
  
 

 