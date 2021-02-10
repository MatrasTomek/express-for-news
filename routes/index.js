var express = require("express");
var router = express.Router();
const Admin = require("../models/admin");
let login;
let password;

/* GET home page. */
router.get("/", (req, res) => {
  res.render("index", { title: "Express" });
});

/*GET admin data*/
router.get("/login", (req, res) => {
  // Dodanie do bazy - opcjonalne
  // new Admin({ login: "...", password: "... }).save();
  Admin.find({}, (err, data) => {
    login = data[0].login;
    password = data[0].password;
  });
  res.render("login", { title: "Logowanie" });
});

router.post("/login", (req, res) => {
  const body = req.body;
  if (body.login === login && body.password === password) {
    req.session.admin = 1;
    res.redirect("/admin");
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
