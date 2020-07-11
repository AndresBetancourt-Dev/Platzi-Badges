const express = require('express');
const router = express.Router();
const Badge = require('../models/badge');

router.get('/', async (req,res)=>{
        
        try{
           const badges = await Badge.find()
           console.log(badges)
           res.json(badges)
        }catch(error){

        }
});

module.exports = router;