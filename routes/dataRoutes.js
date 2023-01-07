const express = require('express'),
    DataController = require('../controllers/DataController'),
    router = express.Router();

router.get('/', DataController.getExpenses);
router.post('/', DataController.addExpense);
router.patch('/', DataController.updateIncome);
router.delete('/:expId', DataController.deleteExpense);

module.exports = router;