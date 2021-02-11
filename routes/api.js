const express = require("express");
const router = express.Router();
const News = require("../models/news");
const defaultSort = -1;

/* API get all data */
router.get("/", (req, res) => {
  const search = req.query.search || "";
  let sort = req.query.sort || -1;

  if (sort !== -1 || sort !== 1) {
    sort = defaultSort;
  }

  const findNews = News.find({ title: new RegExp(search.trim(), "i") })
    .sort({ date: sort })
    .select("_id date title description path");

  findNews.exec((err, data) => {
    res.json(data);
  });
});

/* API get data by id */
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const findNews = News.findById(id);

  findNews.exec((err, data) => {
    res.json(data);
  });
});

module.exports = router;
