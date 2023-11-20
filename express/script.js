const { request } = require('express')
const express = require('express')
const app = express()
app.listen(3333)

app.get('projects', (request, response)=>{
    console.log("server ok")
    return response.send('hello word!')
})