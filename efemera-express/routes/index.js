const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const adminController = require('../controllers/adminController');


router.get('/', homeController.index);
router.post('/contato', homeController.contato);
router.get('/newsletter', homeController.newsletter);

router.get('/admin', adminController.index);

module.exports = router;
