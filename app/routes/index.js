var router = require('express').Router();
var vehiculos = require('./vehiculos')
router.use('/vehiculos',vehiculos)

var personas = require('./personas')
router.use('/personas',personas)
router.get('/',function(req,res){
        res.json({mensaje:'bienvenido a mi api'})
})
module.exports=router;