const express = require("express");
const router = express.Router();

exports.getAllPokemon = router.get("/api/v2/pokemon", (req, res) => {
  var pokemon = require("./api/v2/pokemon/index.json");
  // console.log(pokemon);
  res.json(pokemon);
});

exports.getPokemonByID = router.get("/api/v2/pokemon/:id", (req, res) => {
  const id = req.params.id;
  const pokemon = require(`./api/v2/pokemon/${id}/index.json`)
  res.json(pokemon)
});

exports.getPokemonByType = router.get("/api/v2/type", (req, res) => {
  const pokemon = require("./api/v2/type/index.json")
  res.json(pokemon)
});

exports.getPokemonByType = router.get("/api/v2/type/:id/", (req, res) => {
  const id = req.params.id;
  const pokemon = require(`./api/v2/type/${id}/index.json`)
  res.json(pokemon)
});

module.exports = router;
