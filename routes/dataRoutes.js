const express = require('express'),
    DataController = require('../controllers/DataController'),
    router = express.Router();

router.get('/', DataController.getData);
router.patch('/', DataController.updateIncome);

module.exports = router;