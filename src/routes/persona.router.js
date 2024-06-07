const express = require('express');
const router = express.Router();

const {
    createPersona,
    getPersona,
    getPersonas,
    updatePersona,
    deletePersona
} = require('../controllers/persona.controller')

router.get("/", getPersonas);
router.get("/:page-:limit", getPersonas)
router.get("/:id", getPersona);

router.patch("/:id", updatePersona)
router.post("/", createPersona)
router.delete("/:id", deletePersona)

module.exports = router;