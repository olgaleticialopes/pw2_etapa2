const express = require('express')
const { restart } = require('nodemon')
const app = express()
const port = 3000
const path = require('path')

const basePath = path.join(__dirname, 'templates')

app.use(
    express.urlencoded({
        extended:true,
}))

app.use(express.json())

app.get('/',(req,res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.get('/user/add', (req,res)=>{
    res.sendFile(`${basePath}/userForm.html`)
})

app.post('/users/save', (req,res)=>{
    let name = req.body.name
    let age = req.body.age
    
    console.log(`Node do usuario: ${name}, Idade do usuario: ${age}`)
    restart.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
 console.log(`Servirdor rodando na porta: ${port}`)
})

