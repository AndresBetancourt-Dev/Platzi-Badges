const express = require('express');
const router = express.Router();
const Badge = require('../models/badge');

router.get('/', async (req,res)=>{
        const badges = await Badge.find()
        res.json(badges)
});

router.get('/:id',async (req,res)=>{
        const badge = await Badge.findById(req.params.id);
        res.json(badge);
});

router.post('/',async (req,res)=>{
        const {firstName , lastName , jobTitle , twitter} = req.body;
        const badge = new Badge({firstName,lastName,jobTitle,twitter});
        await badge.save();
        res.json({status : "Added"})
});

router.put('/:id',async (req,res)=>{
        const {firstName , lastName , jobTitle , twitter} = req.body;
        const newBadge = {firstName , lastName , jobTitle , twitter};
        await Badge.findByIdAndUpdate(req.params.id,newBadge);
        res.json({status : "Updated"});
});

router.delete('/:id',async(req,res)=>{
        await Badge.findByIdAndDelete(req.params.id);
        res.json({status : "Deleted"});
});

module.exports = router;