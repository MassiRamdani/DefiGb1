var exp= [{
  "text":"exemple text1",
    "ratio": "8.59",
    "AA": "pass",
    "AALarge": "pass",
    "AAA": "pass",
    "AAALarge": "pass"
  },{
  "text":"exemple text2",
    "ratio": "8.59",
    "AA": "pass",
    "AALarge": "pass",
    "AAA": "pass",
    "AAALarge": "pass"
  },{
  "text":"exemple text3",
    "ratio": "8.59",
    "AA": "pass",
    "AALarge": "pass",
    "AAA": "pass",
    "AAALarge": "pass"
  }];
exports.getObjectInDom = (req, res) => {
   
  const dom = require("../../dom.json");

  res.send(exp);
};
  
 

 