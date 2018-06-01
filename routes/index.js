var express = require('express');
const indexController = require('../controllers/indexController');


var router = express.Router();

/* GET home page. */
router.get('/', indexController.homePage);
router.get('/alex', indexController.alex);
router.get('/erick', indexController.erick);
router.get('/kee', indexController.kee);
router.get('/deanna', indexController.deanna);


module.exports = router;
