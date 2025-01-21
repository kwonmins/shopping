var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index.ejs", { title: "Express" });
});

//about
router.get("/about", function (req, res, next) {
  res.render("about.ejs", { title: "Express" });
});
//blog
router.get("/blog", function (req, res, next) {
  res.render("blog.ejs", { title: "Express" });
});
//coffees
router.get("/coffees", function (req, res, next) {
  res.render("coffees.ejs", { title: "Express" });
});
//contact
router.get("/contact", function (req, res, next) {
  res.render("contact.ejs", { title: "Express" });
});
//index1
router.get("/index1", function (req, res, next) {
  res.render("index1.ejs", { title: "Express" });
});

//shop
router.get("/shop", function (req, res, next) {
  res.render("shop.ejs", { title: "Express" });
});
module.exports = router;
