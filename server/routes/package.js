const express = require('express');
const router = express.Router();
const {addPackage} = require('./db/package')

router.post('/save', (req, res)=>{
    console.log(req.body)
    addPackage(req.body.id, req.body)
    .then(data=>{
        res.json(data)
    })
})

module.exports = router