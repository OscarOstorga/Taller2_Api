const express = require('express');
const router = express.Router();

const {
    createFamilia,
    getFamilia,
    getFamilias,
    updateFamilia,
    deleteFamilia
} = require('../controllers/familia.controller')

router.get("/", getFamilias);
router.get("/:page-:limit", getFamilias)
router.get("/:id", getFamilia);

router.patch("/:id", updateFamilia)
router.post("/", createFamilia)
router.delete("/:id", deleteFamilia)

module.exports = router;