const express = require('express');
const router = express.Router();

const personaRouter = require("./persona.router"); 
const familiaRouter = require('./familia.router');

router.use('/persona', personaRouter);
router.use('/familia', familiaRouter);

module.exports = router;