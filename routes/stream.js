const express = require('express');
const router = express.Router();
const { getAnimeById } = require('../models/anime');

router.get('/:animeId', (req, res) => {
  const anime = getAnimeById(req.params.animeId);
  res.render('stream', { anime });
});

router.get('/:animeId/episode/:episode', (req, res) => {
  const anime = getAnimeById(req.params.animeId);
  const episode = anime.episodes.find(e => e.episode === req.params.episode);
  res.render('stream', { anime, episode });
});

module.exports = router;
