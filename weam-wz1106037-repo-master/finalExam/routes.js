let hifzController = require('./controllers/hifzController');
let express = require('express');
let router = express.Router();

router.get('/surahs',(req,res)=>hifzController.getSurahs(req,res));
router.post('/api/hifz',(req,res)=>hifzController.addHifz(req,res));
router.get('/api/hifz',(req,res)=>hifzController.getHifz(req,res));
router.post('/api/hifz/complete',(req,res)=>hifzController.updateHifz(req,res));


module.exports = router;