
const express = require('express');
const router = express.Router();
const common =require('../controllers/common.controller')
const beers =require('../controllers/beers.controller')

router.get('/', common.home);
router.get('/beers', beers.list);
router.get('/beers/rand', beers.random);
router.get('/beers/:id', beers.get)

module.exports = router;

