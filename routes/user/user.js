const express = require('express');
const router = express.Router();
const usercontroller = require('../../controller/usercontroller');


router.get('/profile' , usercontroller.profile );

module.exports = router;