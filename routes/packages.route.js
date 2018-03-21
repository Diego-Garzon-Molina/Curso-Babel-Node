const express = require ('express');
const router = express.Router();
const packagesCtrl = require('../controllers/packages.controller')

router.route('/')
    .get(packagesCtrl.list)
    .post(packagesCtrl.create)

router.route(':name')
    .get(packagesCtrl.get)
module.exports = router;