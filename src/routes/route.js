const express = require('express');
const router = express.Router();
/*const {Router} = require('express')
const router = Router()
module.exports = router;
}*/ 
const {renderIndex,renderAbout} = require('../controllers/controllers');

router.get('/', renderIndex)//inicial
 
router.get('/about',renderAbout)

module.exports = router;