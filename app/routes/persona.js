const express = require('express');
const PersonaController = require('../controllers/PersonaController');

const router = express.Router();

router.get('/', PersonaController.listall)
      .post('/', PersonaController.create)
      .get('/:key/:value', PersonaController.find, PersonaController.show)
      .put('/:key/:value', PersonaController.find, PersonaController.update)
      .delete('/:key/:value', PersonaController.find, PersonaController.deleted)

module.exports = router;