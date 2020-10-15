const express = require('express')
const path = require('path')

const app = express()
const PORT = 3000

app.get('/', function(req, res){
	let filepath = path.join(__dirname, 'home.html')
    res.sendFile(filepath)
})

app.get('/favorites', function(req,res){
	let filepath = path.join(__dirname, 'favorites.html')
    res.sendFile(filepath)
})

app.get('/blog', function(req,res){
	let filepath = path.join(__dirname, 'thoughts.html')
    res.sendFile(filepath)
})

app.listen(PORT, function(){
	console.log(`running on port ${PORT}`)
})

