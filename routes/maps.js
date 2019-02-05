"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.get('/maps', (req, res) => {
    knex
      .select("*")
      .from("maps")
      .then((results) => {
        res.render('allmaps', { results });
      });
  });

  router.get('/', (req, res) => {
    res.render('createmap');
  });

  router.post('/', (req, res) => {
    console.log(req.body);
    knex('maps')
      .insert({
        name: req.body.name,
        description: req.body.description,
        lat: req.body.lat,
        lng: req.body.lng,
        zoom: req.body.zoom,
        user_id: req.body.user_id
      })
      .then(function (input) { //change veriable names
        console.log('donesql')
        res.render('user');
        console.log(input);
      })
    // .into('maps')

  });

  router.get('/users/:id', (req, res) => {
    console.log(req.body);
    knex('maps')
      .where('user_id', req.params.id)
      .select('*')
      .then((results) => {
        res.render('display_mymaps', { results });
      });
  });

  router.post('/:id/markers', (req, res) => {
    const mapId = req.params.id;
    const userId = 1;
    const lat = req.body.lat;
    console.log(req.body);
    const lng = req.body.lng;
    const name = req.body.name || 'untitled'
    knex('markers')
      .insert({
        name: name,
        lat: lat,
        lng: lng,
        user_id: userId,
        map_id: mapId
      })
      .returning('id')
      .then(function (id) {
        res.json({ id: id[0] })
      })
  })

  return router;
}

