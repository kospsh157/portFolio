const express = require('express');
const router = express.Router();
const path = require('path');

router.use('/', express.static('/Users/psh/Desktop/portFolio/nodeServer/public/index.html'));
// router.get('/', ( req, res, next ) => {
    
//     express.static('/Users/psh/Desktop/portFolio/nodeServer/public/index.html');
    
// });


module.exports = router;