const express = require('express');
const applicantController = require('../Controllers/applicantController');

const router = express.Router();

router.route('/').get(applicantController.home);
router.route('/details').post(applicantController.emailClient_1);

module.exports = router;