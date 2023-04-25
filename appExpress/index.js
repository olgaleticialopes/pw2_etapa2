const express = require('express')
const app = express()
const port = 3000

const path = require('path')
const basePath = path.join(__dirname, 'templates')

var checkAuth = function(req, res, next){
    req.authStatus = true
    if(req.authStatus){
        console.log('Está Logado, Prossiga!')
        next()
    }
    else{
        console.log('Não Logado! Faça o Login!')
    }
}

app.use(checkAuth)

app.get('/',(req,res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.get ('/user/:id', (req,res) =>{
    let emailUser= req.params.id+"@gmail.com"
    console.log( `parametro de usuario:${emailUser}`)
res.sendFile(`${basePath}/user.html`)
})

app.listen(port, () => {
 console.log(`Servirdor rodando na porta: ${port}`)
})

