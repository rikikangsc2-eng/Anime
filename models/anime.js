const animeList = [];

function addAnime(title, synopsis, thumbnail, genre, animeId) {
  animeList.push({ title, synopsis, thumbnail, genre, animeId, episodes: [] });
}

function addEpisode(animeId, episode, link) {
  const anime = animeList.find(a => a.animeId === animeId);
  if (anime) {
    anime.episodes.push({ episode, link });
  }
}

function getAllAnime() {
  return animeList;
}

function getAnimeById(animeId) {
  return animeList.find(a => a.animeId === animeId);
}

module.exports = { addAnime, addEpisode, getAllAnime, getAnimeById };
