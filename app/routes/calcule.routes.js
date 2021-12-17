module.exports = (app) => {
  const cal = require("../controllers/calcul.controller");

  var router = require("express").Router();

  // Retrieve all activite
  router.get("/calcul/url/:url", cal.getObjectInDom);
 
 

  app.use("/api/v1", router);

 };

