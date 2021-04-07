const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', express.static('/Users/psh/Desktop/portFolio/nodeServer/public/index.html'));

module.exports = router;