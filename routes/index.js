const express = require('express');
const router = express.Router();
const { getAllAnime } = require('../models/anime');

router.get('/', (req, res) => {
  const anime = getAllAnime();
  res.render('index', { anime });
});

module.exports = router;
