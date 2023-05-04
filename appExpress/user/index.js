const express = require('express')
const router = express.Router()
const path = require('path')
const basePath = path.join(__dirname,'../templates')

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userForm.html`)
})

router.post('/save', (req, res) =>{
    let name = req.body.name
    let age = req.body.age

    console.log(`Nome do Usuario: ${name}, Idade: ${age}`)
    res.sendFile(`${basePath}/userForm.html`)
})

module.exports = router