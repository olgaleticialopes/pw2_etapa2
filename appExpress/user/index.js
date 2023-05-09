const express = require('express')
const router = express.Router()
const path = require('path')
const basePath = path.join(__dirname,'../templates')
const fs = require('fs')


router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userForm.html`)
})

router.post('/save', (req, res) =>{
    let name = req.body.name
    let age = req.body.age

    if (!fs.existsSync('accounts')) {
        fs.mkdirSync('accounts')
    }

    if (fs.existsSync(`accounts/${name}.json`)) {
        res.status(400).sendFile(`${basePath}/erro.html`)
    }

    fs.writeFileSync(
        `accounts/${name}.json`,
        `{"name":"${name}", "age":${age}}`,
        function (err) {
            console.error(err)
        }        
    )

    console.log(`Nome do Usuario: ${name}, Idade: ${age} | Estão salvos no servidor.`)
    res.sendFile(`${basePath}/userForm.html`)
})

module.exports = router